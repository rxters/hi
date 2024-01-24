
var buttonOne = document.getElementById("b1");
var buttonTwo = document.getElementById("b2");

buttonOne.addEventListener("click", nextPage);
buttonTwo.addEventListener("mouseover", setRandomPosition);

function nextPage(){
    window.location.href = "word.html";
}

function getRandomPosition() {
    var buttonWidth = buttonTwo.offsetWidth;
    var buttonHeight = buttonTwo.offsetHeight;
    var maxX = window.innerWidth - buttonWidth;
    var maxY = window.innerHeight - buttonHeight;
    
    var randomX = Math.random() * maxX;
    var randomY = Math.random() * maxY;
    
    return { x: randomX, y: randomY };
}

// Function to set random position for the button
function setRandomPosition() {
    var newPosition = getRandomPosition();
    buttonTwo.style.left = newPosition.x + 'px';
    buttonTwo.style.top = newPosition.y + 'px';
}
