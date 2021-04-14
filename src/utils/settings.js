/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

export const ALIGNMENTS = [
	{
		icon: icons.alignLeft,
		title: __( 'Align text left', 'gp-block-text-align-mobile' ),
		align: 'left',
	},
	{
		icon: icons.alignCenter,
		title: __( 'Align text center', 'gp-block-text-align-mobile' ),
		align: 'center',
	},
	{
		icon: icons.alignRight,
		title: __( 'Align text right', 'gp-block-text-align-mobile' ),
		align: 'right',
	},
];

/**
 * Check if given block is restricted.
 *
 * @param {string} blockName the block name.
 * @return {boolean} true or false.
 */
export function isRestrictedBlock( blockName ) {
	const restrictedBlocks = applyFilters(
		'gp-block-text-align-mobile.restricted-blocks',
		[
			'core/block',
			'core/freeform',
			'core/shortcode',
			'core/template',
			'core/nextpage',
		]
	);

	return restrictedBlocks.includes( blockName );
}
