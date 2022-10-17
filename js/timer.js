(function(window){

let startDate = new Date();
let elapsedTime = 0;
var secondsSpentElement = document.getElementById("seconds-spent");
var millisecondsSpentElement = document.getElementById("milliseconds-spent");

const focus = function() {
    startDate = new Date();
};

const blur = function() {
    const endDate = new Date();
    const spentTime = endDate.getTime() - startDate.getTime();
    elapsedTime += spentTime;
    secondsSpentElement.textContent = elapsedTime/1000 + ' seconds'
};

const beforeunload = function() {
    const endDate = new Date();
    const spentTime = endDate.getTime() - startDate.getTime();
    elapsedTime += spentTime;
    secondsSpentElement.textContent = elapsedTime/1000 + ' seconds'
    // elapsedTime contains the time spent on page in milliseconds
};


window.addEventListener('focus', focus);
window.addEventListener('blur', blur);
window.addEventListener('beforeunload', beforeunload)



})(window)