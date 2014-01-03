<?php
/*
Plugin Name: DPLA Search Widget
Plugin URI: https://github.com/lfarrell/Wordpress-DPLA-Search-Widget-Plugin
Description: Plugin for displaying a search form to search the Digital Public Library of America
Author: Dean Farrell
Version: 0.1
Author URI: https://github.com/lfarrell/Wordpress-DPLA-Search-Widget-Plugin
*/

function dpla_search_widget_load() {
    wp_register_script('add-dpla-widget-js', 'http://dp.la/info/wp-content/uploads/2013/12/dpla-search-widget.js', '', null,'');
    wp_enqueue_script('add-dpla-widget-js');
}

add_action( 'wp_enqueue_scripts', 'dpla_search_widget_load');