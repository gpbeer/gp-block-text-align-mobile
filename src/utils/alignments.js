/**
 * Internal dependencies
 */
import icons from './icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const ALIGNMENTS = [
  {
    icon: icons.alignLeft,
    title: __( 'Align text left' ),
    align: 'left',
  },
  {
    icon: icons.alignCenter,
    title: __( 'Align text center' ),
    align: 'center',
  },
  {
    icon: icons.alignRight,
    title: __( 'Align text right' ),
    align: 'right',
  },
];
