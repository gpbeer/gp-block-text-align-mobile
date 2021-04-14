/**
 * Internal dependencies
 */
import { ALIGNMENTS } from '../../utils/settings';
import icons from '../../utils/icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToolbarGroup } from '@wordpress/components';

/**
 * Style dependencies
 */
import './style.scss';

function TextAlignmentControl( props ) {
	const {
		value,
		onChange,
		alignmentControls = ALIGNMENTS,
		label = __( 'Change text alignment' ),
		isCollapsed = false,
	} = props;

	function applyOrUnset( align ) {
		return () => onChange( value === align ? undefined : align );
	}

	return (
		<>
			<ToolbarGroup
				isCollapsed={ isCollapsed }
				icon={ icons.mobile }
				label={ label }
				controls={ alignmentControls.map( ( control ) => {
					const { align } = control;
					const isActive = value === align;

					return {
						...control,
						isActive,
						role: isCollapsed ? 'menuitemradio' : undefined,
						onClick: applyOrUnset( align ),
					};
				} ) }
			/>
		</>
	);
}

export { TextAlignmentControl };
