<?php

add_theme_support( 'post-thumbnails' );
add_filter( 'pre_option_upload_path', function( $upload_path ) {
    return '/uploads';
});

add_filter( 'pre_option_upload_url_path', function( $upload_url_path ) {
    return 'http://www.andrewthomashill.co.uk/uploads';
});

add_filter( 'w3tc_can_print_comment', '__return_false', 10, 1 );
?>