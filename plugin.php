<?php
/**
 * Plugin Name:     GP Block Text Align Mobile
 * Description:     WordPress mobile text align control for Gutengerg blocks.
 * Version:         1.0.0
 * Author:          German PICHARDO
 * Text Domain:     gp-block-text-align-mobile
 * Domain Path:     /languages
 * Tested up to:    5.5.1
 *
 * @link            https://github.com/german-pichardo/gp-block-text-align-mobile
 * @package         GP\GP_Block_TAM
 */

namespace GP\GP_Block_TAM;

defined( 'ABSPATH' ) || exit;

define( 'GP_BLOCK_TAM_FILE', __FILE__ );
define( 'GP_BLOCK_TAM_DIR', plugin_dir_path( GP_BLOCK_TAM_FILE ) );
define( 'GP_BLOCK_TAM_URL', plugin_dir_URL( GP_BLOCK_TAM_FILE ) );
define( 'GP_BLOCK_TAM_URL_SHARED', GP_BLOCK_TAM_URL . 'src/shared' );

// Plugin Global information.
require_once GP_BLOCK_TAM_DIR . 'includes/class-info.php';

/**
 * The code that runs during plugin activation.
 */
function run_activation() {
	include_once GP_BLOCK_TAM_DIR . 'includes/class-activator.php';
	Activator::activate();
}

register_activation_hook( __FILE__, __NAMESPACE__ . '\run_activation' );

/**
 * Begins execution of the plugin.
 */
function run_init() {
	include_once GP_BLOCK_TAM_DIR . 'includes/class-init.php';
	new Init();
}

run_init();
