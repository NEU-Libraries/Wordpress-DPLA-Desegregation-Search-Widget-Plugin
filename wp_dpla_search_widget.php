<?php
/*
Original Plugin Name: DPLA Search Widget
NEW Plugin Name: DPLA Desegration Search Widget
Original Plugin URI: https://github.com/lfarrell/Wordpress-DPLA-Search-Widget-Plugin
Description: Plugin for displaying a search form to search the Digital Public Library of America and concatenating relevant Boston Desegreation materials search string
Author: Dean Farrell
Version: 0.1
Original Author URI: https://github.com/lfarrell/Wordpress-DPLA-Search-Widget-Plugin
*/

function dpla_search_widget_load() {
    wp_register_script('add-dpla-widget-js', 'http://liblab.neu.edu/dpla-widget/desegregation/dpla-deseg-search-widget.js', '', null,'');
    wp_enqueue_script('add-dpla-widget-js');
}

add_action( 'wp_enqueue_scripts', 'dpla_search_widget_load');
