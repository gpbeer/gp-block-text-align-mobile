<?php
/**
 * Plugin initialization file.
 *
 * @package GP\GP_Block_TAM
 */

namespace GP\GP_Block_TAM;

defined( 'ABSPATH' ) || exit;

/**
 * Class Init
 */
class Init {
	/**
	 * Define the core functionality of the plugin.
	 */
	public function __construct() {
		$this->load_dependencies();
		$this->register();
	}

	/**
	 * Load all dependencies
	 */
	private function load_dependencies() {
		$plugin_dir = GP_BLOCK_TAM_DIR;

		// Includes.
		include_once $plugin_dir . 'includes/class-i18n.php';
		include_once $plugin_dir . 'includes/class-block-assets.php';
	}

	/**
	 * Register all necessary hooks.
	 */
	private function register() {
		$translator = new I18n();
		add_action( 'plugins_loaded', [ $translator, 'load_plugin_textdomain' ], 99 );

		$block_assets = new Block_Assets();
		$block_assets->init();
	}
}
