var swiper = new Swiper(('.swiper.first'), {
    spaceBetween: 10,
    initialSlide: 1,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            slidesPerGroup: 2,
            centeredSlides: true,
        },
    },
});

var swiper2 = new Swiper('.swiper.second', {
    spaceBetween: 10,
    initialSlide: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next.sec",
        prevEl: ".swiper-button-prev.sec",
    },
    slideClass: ".swiper-slide.second",
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            slidesPerGroup: 2,
            centeredSlides: true,
        },
    },
});