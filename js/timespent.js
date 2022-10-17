(function(window){"use strict";

var secondsSpentElement = document.getElementById("seconds-spent");
var millisecondsSpentElement = document.getElementById("milliseconds-spent");

requestAnimationFrame(function updateTimeSpent(){
    var timeNow = performance.now();
    
    secondsSpentElement.value = Math.round(timeNow/1000);
    millisecondsSpentElement.value = Math.round(timeNow);
    
    requestAnimationFrame(updateTimeSpent);
});

var performance = window.performance, round = Math.round;

})(window);