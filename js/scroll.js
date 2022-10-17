function getScrollPoistion() {
    var ContainerElement = document.getElementById("ContentContainer");
    var x = ContainerElement.scrollLeft;
    var y = ContainerElement.scrollTop;
	  console.log(x); // scroll position from Left
    console.log(y); // scroll position from top
  }