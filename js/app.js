const heroSlider = new Swiper('.hero-bg', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.hero-bg-pagination',
        clickable: true,
    },
});

const reviewsSlider = new Swiper('.reviews-slider', {
    slidesPerView: 3,
    spaceBetween: 33,
    loop: true,
    navigation: {
        nextEl: '.reviews__wrapper-arrow-next',
        prevEl: '.reviews__wrapper-arrow-prev',
    },
});


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});


const faq = document.querySelectorAll('.faq-item');

faq.forEach((el)=>{
    el.onclick = ()=>{
        el.classList.toggle('active')
    }
})