$(function () {

    // $('.rate-yo').rateYo({
    //     rating: 3.6
    // });

    // $("#rateYo").rateYo({
    //     rating: 3.6
    // });

    $('.menu__btn').on('click', function (){
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    });




    $('.banner-section__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    dots: false
                }
            }
        ]

    });

    $('.stock__items').slick({
        prevArrow: "<button class='stock__btn stock__btn-prev'><img class='slider__button-left' src='../images/left_1.svg' alt=''></button>",
        nextArrow: "<button class='stock__btn stock__btn-next'><img class='slider__button-right' src='../images/right_1.svg' alt=''></button>",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.product-slider').slick({
        prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img class="slider__button-left" src="../images/left_1.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img class="slider__button-right" src="../images/right_1.svg" alt=""></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
        // $('.tabs-content').eq($(this).index()).addClass('tabs-content--active');
    });




    $('.product-item__heart').on('click', function () {
        $(this).toggleClass('product-item__heart--active')
    });

    $('.catalog__filter-btn').on('click', function (e) {
        e.preventDefault();
    });


    $('.catalog__filter-items .catalog__tab').click(function () {
        $('.catalog__tab').removeClass('catalog__filter-btn--active').eq($(this).index()).addClass('catalog__filter-btn--active');
        $('.catalog__inner-list').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('catalog__filter-btn--active');


    // ------------------------

    $('.product-card__icon-heart').on('click', function () {
        $(this).toggleClass('product-card__icon-heart--active')
    });

    $('.product-card__icon-compare').on('click', function () {
        $(this).toggleClass('product-card__icon-compare--active')
    });


    // ---------------------


    $('.card__tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });


    $(function(){
        $("#datepicker").datepicker();
    });

    // ?????????????????????????????????????????????????????????????????????????????????

    $('.filter-style').styler();
    $('.filter__item-drop').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(100);
    });



    $('.js-range-slider').ionRangeSlider();



    // $('.catalog__filter-btn--grid').on('click', function (){
    //    $(this).addClass('catalog__filter-button--active');
    //    $('.catalog__filter-btn--row').removeClass('catalog__filter-button--active');
    //     $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    // });
    //
    // $('.catalog__filter-btn--row').on('click', function (){
    //    $(this).addClass('catalog__filter-button--active');
    //    $('.catalog__filter-btn--grid').removeClass('catalog__filter-button--active');
    //    $('.product-item__wrapper').addClass('product-item__wrapper--list');
    // });


    // $('.product-card__icon-heart').on('click', function () {
    //     $(this).toggleClass('product-card__icon-heart--active')
    // });
    //
    // $('.product-card__icon-compare').on('click', function () {
    //     $(this).toggleClass('product-card__icon-compare--active')
    // });





});












