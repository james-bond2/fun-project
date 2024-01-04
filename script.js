

var counterElement = document.getElementById("counter");

var increaseElement = document.getElementById("increase");

var decreaseElement = document.getElementById("decrease");

var counterValue = 0;

function updateCounter(){
    counterElement.textContent=counterValue;
}

increaseElement.addEventListener("click", function(){
    counterValue = counterValue + 1;
    updateCounter()
})

decreaseElement.addEventListener("click", function(){
    counterValue = counterValue - 1;
    updateCounter()
})

