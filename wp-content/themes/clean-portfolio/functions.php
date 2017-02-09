<?php

add_theme_support( 'post-thumbnails' );

add_filter( 'w3tc_can_print_comment', '__return_false', 10, 1 );
?>