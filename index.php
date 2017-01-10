<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Andrew Hill</title>
        <meta name="description" content="Developer, sometimes designer, music weirdo">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:title" content="Andrew Hill">
        <meta property="og:url" content="http://www.andrewthomashill.co.uk/">
        <meta property="og:site_name" content="Andrew Hill">
        <meta itemprop=ig:description" property="og:description" content="Developer, sometimes designer, music weirdo">
        <link rel="stylesheet" href="/theme/stylesheets/main.css">
        <script src="/theme/js/vendor/modernizr-2.8.3.min.js"></script>
        <script src="https://use.typekit.net/lbu3vge.js"></script>
        <script>try{Typekit.load({ async: true });}catch(e){}</script>
    </head>
    <body class="home">
        <header>
            <h1>Andrew Hill</h1>
            <p>Freelance developer and strategic comms professional. Also run one of the UK's leading new music websites.</p>
            <p><a href="mailto:contact@andrewthomashill.co.uk">contact@andrewthomashill.co.uk</a></p>
        </header>
        <main>
            <ul class="work">
                <?php
                    if(have_posts()): while(have_posts()): the_post(); 
                ?>
                <a href="<?php echo get_post_meta(get_the_ID(), 'link', true); ?>">
                    <figure>
                        <img srcset="
                        <?php 
                            $attachment = get_post_thumbnail_id();
                            echo wp_get_attachment_image_srcset($attachment, large); ?>
                           " />
                        <figcaption>
                            <h2><?php the_title(); ?></h2>
                            <p><?php    
                                    $tags = get_the_tags();
                                    $count = count($tags);
                                    $i=1;
                                    foreach ($tags as &$tag) {
                                        if($i < $count)
                                        {
                                          echo $tag->name . ', ';
                                          $i++;
                                        }
                                        else
                                        {
                                          echo $tag->name;
                                        } 
                                    }
                                ?></p>
                            <p><?php 
                                $date = get_post_meta(get_the_ID(), 'date', true);
                                if($date == null) { 
                                    the_date('Y');
                                } else {
                                    echo $date;
                                    } ?>
                            </p>
                        </figcaption>
                    </figure>
                </a>
                <?php 
                    endwhile; endif;
                ?>
            </ul>
        </main>
        <footer>
            <p>© <?php echo date('Y'); ?> Andrew Hill</p>
        </footer>
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>
    </body>
</html>
