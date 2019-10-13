jQuery(function() {
    $('.slider-box').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2
    });

    $('.slick-prev, .slick-next').html('<i class="fas fa-arrow-right"></i>');
    $('slick-prev').appendTo('.slick-list');
});