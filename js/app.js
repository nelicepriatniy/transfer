const heroSlider = new Swiper(".hero-bg", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-bg-pagination",
    clickable: true,
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,
  navigation: {
    nextEl: ".reviews__wrapper-arrow-next",
    prevEl: ".reviews__wrapper-arrow-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
  },
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});

const faq = document.querySelectorAll(".faq-item");

faq.forEach((el) => {
  el.onclick = () => {
    el.classList.toggle("active");
  };
});

console.log(123);

const headerBurger = document.querySelector(".header-burger");
const headerMobMenu = document.querySelector(".header-menu-mob");
const headerMenuClose = headerMobMenu.querySelector(".header-menu-close");
headerBurger.onclick = () => {
  headerMobMenu.classList.add("active");
};
headerMenuClose.onclick = () => {
  headerMobMenu.classList.remove("active");
};


//form chairs

const form = document.querySelector('.form-popup form');

const formChairItems = form.querySelectorAll('.chair-item');

if(formChairItems.length > 0) {
  formChairItems.forEach((el)=>{
    const chairInput = el.querySelector('.chair-input-itself')
    const chairPluss = el.querySelector('.chair-input-pluss')
    const chairMinus = el.querySelector('.chair-input-minus')
    let value = 0;

    console.log(chairInput);
    

    chairPluss.onclick = ()=>{
      value = value + 1
      chairInput.value = value
      console.log(value);
      
    }
    chairMinus.onclick = ()=>{
      if(value > 0) {
        value = value -1
        chairInput.value = value
        console.log(value);
      }
    }
  })
}

//form selects

const formSelects = form.querySelectorAll('.select-item');

if(formSelects.length > 0) {
  formSelects.forEach((el)=>{
    const triger = el.querySelector('.select-body');
    const heading = el.querySelector('.select-body p')
    const items = el.querySelectorAll('ul li');
    const input = el.querySelector('input');
    triger.onclick = ()=>{
      el.classList.toggle('active')
    }
    if(items.length > 0) {
      items.forEach((item)=>{
        item.onclick = ()=>{
          heading.innerHTML = item.textContent
          input.value = item.textContent
          console.log(input.value);
          el.classList.remove('active')
          
        }
      })
    }
    
  })
}


//popups logic
class Popup {
  constructor( props ) {
    this.isActive = false;
    this.activeClass = props.activeClass;
    this.el = document.querySelector("." + props.className);
  }
  getEl() {
    return this.el;
  }
  openPopup() {
    console.log("popup opened");
    this.isActive = true;
    this.el.classList.add(this.activeClass);
    return this.isActive;
  }
  closePopup() {
    console.log("popup closed");
    this.isActive = false;
    this.el.classList.remove(this.activeClass);
    return this.isActive;
  }
}


const popupsList = document.querySelectorAll('.popup')
const popupOwerVue = document.querySelector('.closePopups')

popupOwerVue.onclick = ()=>{
  popupOwerVue.classList.remove('active')
  popupsList.forEach((el)=>{
    el.classList.remove('active')
  })
}

const exPopup = new Popup({
  className: 'excurs-popup',
  activeClass: 'active'
})
const carPopup = new Popup({
  className: 'car-popup',
  activeClass: 'active'
})
const formPopup = new Popup({
  className: 'form-popup',
  activeClass: 'active'
})


const openExPopupBtns = document.querySelectorAll('.openexqPopup');
openExPopupBtns.forEach((el)=>{
  el.onclick = ()=>{
    exPopup.openPopup();
    popupOwerVue.classList.add('active')
  }
})
const openCarPopupBtns = document.querySelectorAll('.openecarPopup');
openCarPopupBtns.forEach((el)=>{
  el.onclick = ()=>{
    carPopup.openPopup();
    popupOwerVue.classList.add('active')
  }
})
const openformPopupBtns = document.querySelectorAll('.openformPopupBtns');
openformPopupBtns.forEach((el)=>{
  el.onclick = ()=>{
    formPopup.openPopup();
    popupOwerVue.classList.add('active')
  }
})


