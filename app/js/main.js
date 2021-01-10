$(function () {

    $('.banner-section__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 3000,
        fade: true

    });

    $('.stock__items').slick({
        prevArrow: '<button class="stock__btn stock__btn-prev"><img src="../images/left_1.svg" alt=""></button>',
        nextArrow: '<button class="stock__btn stock__btn-next"><img src="../images/right_1.svg" alt=""></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
    });

    $('.product-slider').slick({
        prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="../images/left_1.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="../images/right_1.svg" alt=""></button>',
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    });

    $('.product-item__heart').on('click', function () {
        $(this).toggleClass('product-item__heart--active')
    });


});

