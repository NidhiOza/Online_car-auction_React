( function($) {
    $(document).ready(function() {
        //mobile menu click
        $(".navbar-toggler").click(function() {
            $(this).toggleClass("current");
            $("body").toggleClass("openMenu");
        });
        //fixed-header on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.fixed-header').addClass('fixed');
            } else {
                $('.fixed-header').removeClass('fixed');
            }
        });
        //aos
        AOS.init({
            once: true, // this one if you want to load animation once else you can remove it,
            disable: 'mobile'
        });
        //matchHeight js
        $(".matchHeight").matchHeight();
    });
} )(jQuery);
//page-loader
$(window).on('load', function() {
    setTimeout(function() { // allowing 3 secs to fade out loader
        $('.page-loader').fadeOut('slow');
    }, 1500);
});

