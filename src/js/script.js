const btnMobile = document.querySelector("#btn-menu");
const navLinks = document.getElementById("nav-links");
const iconBtn = document.querySelector("#btn-menu i")

btnMobile.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    iconBtn.classList.toggle('fa-times')
    iconBtn.classList.toggle('fa-bars')
});

let swiper;

function initSwiper() {
    if (window.innerWidth >= 1440) return; // Desktop: não inicia

    swiper = new Swiper(".mySwiper", {
        freeMode: true,
        // when window width is >= 320px
        breakpoints: {
            400: {
                slidesPerView: 1.712,
                spaceBetween: 20
            },
            // when window width is >= 480px
            800: {
                slidesPerView: 2.6,
                spaceBetween: 15
            },
        }
    });
}

function destroySwiper() {
    if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
    }
}

function checkSize() {
    if (window.innerWidth <= 768 && !swiper) {
        initSwiper();
    } else if (window.innerWidth <= 1200) {
        initSwiper(); 
    } else {
        destroySwiper();
    }
}


checkSize();
window.addEventListener('resize', checkSize);