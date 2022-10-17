

window.addEventListener("scroll", function(){
  checkScroll()
})


  // if(document.body.scrollTop < 50 || document.documentElement.scrollTop < 50){

  // }

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


function checkScroll(){
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("body").classList.add("scrolled");
    console.log(document.body.scrollTop)

  }
}
