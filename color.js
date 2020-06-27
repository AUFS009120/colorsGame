var totalS = 6;
var colors = generateColors(totalS);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var display = document.querySelector("#display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
var easyLevel = document.querySelector(".easybtn");
var mediumLevel = document.querySelector(".mediumbtn");
var hardLevel = document.querySelector(".hardbtn");
display.textContent = pickedColor;

easyLevel.addEventListener("click", function(){
  easyLevel.classList.add("level");
  hardLevel.classList.remove("level");
  totalS = 3;
  colors = generateColors(totalS);
  pickedColor = pickColor();
  display.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

hardLevel.addEventListener("click", function(){
  easyLevel.classList.remove("level");
  hardLevel.classList.add("level");
  totalS = 6;
  colors = generateColors(totalS);
  pickedColor = pickColor();
  display.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
}
});

resetButton.addEventListener("click", function(){
  colors = generateColors(totalS);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  this.textContent = "New Colors"
  display.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  }
  h1.style.background = "#fe346e";
});

for (var i = 0; i < squares.length; i++) {
  //initializing colors
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function() {
  //storing the cololr
    var clickedColor = this.style.background;
  //checking the color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct...!";
      h1.style.background = clickedColor;
      filColors(clickedColor);
      resetButton.textContent = "Play Again?";
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again.!"
    }
  });
}

function filColors(color){

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}
alert("RGB refers to RED GREEN BLUE, have to guess what comes when you mix those colors.");

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " +  b + ")";
}
