const removeLoaderBtn = document.querySelector("._jsLoader");
const loaderEl = document.querySelector(".loader")
const videoHoverEl = document.querySelectorAll(".hoverVideo");

if(sessionStorage.getItem("viewed") == "true"){
  console.log('already viewed')
  loaderEl.style = "display:none"
  body.classList.remove("loading");

}
videoHoverEl.forEach(function(videoEl, index){
  videoEl.addEventListener("click", function(e){
    e.preventDefault();
    // console.log(e.target)
    videoEl.paused ? videoEl.play() : videoEl.pause()
     // videoEl.play();

  })
})


removeLoaderBtn.addEventListener("click", function(){
  removeLoader();
})

const removeLoader = function(){
  body.classList.remove("loading");
  sessionStorage.setItem("viewed","true");
}