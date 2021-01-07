$(function () {

    $('.banner-section__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 3000,
        fade:true

    });

    $('.stock__items').slick({
        prevArrow: '<button class="stock__btn stock__btn-prev"><img src="../images/left_1.svg" alt=""></button>',
        nextArrow: '<button class="stock__btn stock__btn-next"><img src="../images/right_1.svg" alt=""></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplaySpeed: 3000,
    });


});

