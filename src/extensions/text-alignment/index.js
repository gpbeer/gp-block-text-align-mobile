/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
import { TextAlignmentControl } from '../../components/text-alignment-control';
import { isRestrictedBlock } from '../../utils/settings';

/**
 * WordPress Dependencies
 */
import { BlockControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes( settings ) {
	// Add allowedBlocks restriction
	if ( isRestrictedBlock( settings.name ) ) {
		return settings;
	}

	Object.assign( settings.attributes, {
		textAlignMobile: {
			type: 'string',
		},
	} );

	return settings;
}

/**
 * Add mobile visibility controls on Block Panel.
 *
 * @param {Function} BlockEdit Block edit component.
 *
 * @return {Function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( ! isRestrictedBlock( props.name ) && props.isSelected ) {
			const { attributes, setAttributes } = props;

			const { textAlignMobile } = attributes;

			return (
				<>
					<BlockEdit { ...props } />
					<BlockControls>
						<TextAlignmentControl
							isCollapsed={ true }
							onChange={ ( nextTextAlign ) =>
								setAttributes( {
									textAlignMobile: nextTextAlign,
								} )
							}
							value={ textAlignMobile }
						/>
					</BlockControls>
				</>
			);
		}

		return <BlockEdit { ...props } />;
	};
}, 'withAdvancedControls' );

/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */
function applyExtraClass( extraProps, blockType, attributes ) {
	// Add allowedBlocks restriction
	if ( isRestrictedBlock( blockType.name ) ) {
		return extraProps;
	}

	const { textAlignMobile } = attributes;

	// Add class only when textAlignMobile = true
	if ( typeof textAlignMobile !== 'undefined' && textAlignMobile ) {
		extraProps.className = classnames( extraProps.className, {
			[ `has-text-align--${ textAlignMobile }-mobile` ]: textAlignMobile,
		} );
	}

	return extraProps;
}

// Add filters
addFilter(
	'blocks.registerBlockType',
	'gp-blocks/text-alignment-settings/custom-attributes',
	addAttributes
);

addFilter(
	'editor.BlockEdit',
	'gp-blocks/text-alignment-settings/custom-text-alignment-control',
	withAdvancedControls
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'gp-blocks/text-alignment-settings/applyExtraClass',
	applyExtraClass
);
