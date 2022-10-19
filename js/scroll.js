const removeLoaderBtn = document.querySelector("._jsLoader");
const loaderEl = document.querySelector(".loader")

if(sessionStorage.getItem("viewed") == "true"){
  console.log('already viewed')
  loaderEl.style = "display:none"
  body.classList.remove("loading");

}

removeLoaderBtn.addEventListener("click", function(){
  removeLoader();
})

const removeLoader = function(){
  body.classList.remove("loading");
  sessionStorage.setItem("viewed","true");
}