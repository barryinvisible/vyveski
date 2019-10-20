jQuery(function() {
    $('.slider-box').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        touchMove: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="flex: none;"><i class="fas fa-arrow-right"></i></button>',
        nextArrow: '<button class="slick-prev slick-arrow" aria-label="Next" type="button" style="flex: none;"><i class="fas fa-arrow-left"></i></button>',
        responsive: [{
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('slick-prev').appendTo('.slick-list');
    $('.burger-icon').on('click', function() {
        $(this).toggleClass('toggleIcon');
        // $('.header-nav').toggleClass('burger-nav');
    });
    // let windowWidth = $(window).width();
    // if (windowWidth <= 960) {
    //     $('.header-location, .header-contact').appendTo('.header-nav');
    // }
});