jQuery(function() {
    $('.slider-box').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        touchMove: true,
        responsive: [{
                breakpoint: 960,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick-prev, .slick-next').html('<i class="fas fa-arrow-right"></i>');
    $('slick-prev').appendTo('.slick-list');
    $('.icon').on('click', function() {
        $(this).toggleClass('toggleIcon');
        $('.header-nav').toggleClass('burger-nav');
    });
    let windowWidth = $(window).width();
    if (windowWidth <= 960) {
        $('.header-location, .header-contact').appendTo('.header-nav');
    }
});