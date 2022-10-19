const body = document.querySelector("body");
window.addEventListener("scroll", function(){
  checkScroll()
})

const channelSwiper = new Swiper('.channelSwiper', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView:2,
  freeMode: true,
   breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});

// featuredSwiper

const featuredSwiper = new Swiper('.featuredSwiper', {
  speed: 400,
  spaceBetween: 20,
  slidesPerView:1
});


const newsSwiper = new Swiper('.newsSwiper',{
    speed: 400,
  spaceBetween: 10,
  slidesPerView:1,
   breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
})


function checkScroll(){
  // happy path first approach
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 150) {
    body.classList.add("scrolled");
    // console.log(document.body.scrollTop)
    return
  }

  body.classList.remove("scrolled")

}


const menuBtn = document.querySelector('._jsMenu');

menuBtn.addEventListener("click", function(e){
  e.preventDefault();
  body.classList.toggle("menu--open")
  if(body.classList.contains('menu--open')){
    this.innerText = 'Close';

  }else{
    this.innerText = 'Menu';
  }
})

const player = new Plyr('#preview-video');