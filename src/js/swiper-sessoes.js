// SESSÕES DE SLIDES COM INTERAÇÕES 

// SERVICES
let swiperService;

function initSwiper() {
    if (window.innerWidth >= 1440) return; // Desktop: não inicia

    swiperService = new Swiper(".mySwiper", {
        freeMode: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 2.625,
                spaceBetween: 15,
            },
        }
    });
}

function destroySwiper() {
    if (swiperService) {
        swiperService.destroy(true, true);
        swiperService = null;
    }
}

function checkSize() {
    if (window.innerWidth <= 768 && !swiperService) {
        initSwiper();
    } else if (window.innerWidth <= 1200) {
        initSwiper();
    } else {
        destroySwiper();
    }
}


checkSize();
window.addEventListener('resize', checkSize);


// TESTEMORY  
var swiperTestemory = new Swiper(".mySwiperDesk", {
    slidesPerView: 1.2,
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        1200: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
        }
    },
}
);

// DISHES
var swiperDishes = new Swiper(".mySwiperDeskDishes", {
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        420: {
            slidesPerView: 1.1,
            spaceBetween: 25
        },
        820: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 28
        }
    }
}); 