/**
 * WordPress dependencies
 */
import { applyFilters } from '@wordpress/hooks';

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
