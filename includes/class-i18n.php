<?php
/**
 * Translation
 *
 * @package GP\GP_Block_TAM
 */

namespace GP\GP_Block_TAM;

defined( 'ABSPATH' ) || exit;

/**
 * Loads the plugin language files.
 */
class I18n {
	/**
	 * Load the plugin text domain for translation.
	 */
	public function load_plugin_textdomain() {
		load_plugin_textdomain(
			'gp-block-text-align-mobile',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);
	}
}
