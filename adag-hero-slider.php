<?php
/**
 * Plugin Name:       Hero Slider
 * Description:       A great slideshow block with hero slides.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Adson Cicilioti
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       hero-slider
 *
 * @package HeroSlider
 */

function adag_hero_slider_block_assets() {

	if ( has_block( 'adag/hero-slider' ) || is_admin() ) {
		wp_enqueue_script(
			'splide-js',
			plugins_url( '/vendor/splide.js', __FILE__ ),
			array()
		);
		wp_enqueue_script(
			'splide-js-init',
			plugins_url( '/vendor/splideInit.js', __FILE__ ),
			array( 'splide-js' )
		);
		wp_enqueue_style(
			'splide-css',
			plugins_url( '/vendor/splide.css', __FILE__ ),
			array()
		);
	}
}
add_action( 'enqueue_block_assets', 'adag_hero_slider_block_assets' );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function adag_hero_slider_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'adag_hero_slider_block_init' );
