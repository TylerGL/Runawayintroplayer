// Detecting button press
var numberOfKeyButtons = document.querySelectorAll(".key").length;
for (var i = 0; i < numberOfKeyButtons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    confirmedWavyClick(buttonInnerHTML);
  })
}

//detecting keydown press
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  confirmedWavyKey();
})

function makeSound(key) {
  switch (key) {
    case "a":
      var key1 = new Audio('sounds/e.mp3');
      key1.play();
      break;

    case "s":
      var key2 = new Audio('sounds/ed1.mp3');
      key2.play();
      break;

    case "d":
      var key3 = new Audio('sounds/dsu1.mp3');
      key3.play();
      break;

    case "f":
      var key4 = new Audio('sounds/dsd1.mp3');
      key4.play();
      break;

    case "g":
      var key5 = new Audio('sounds/csu1.mp3');
      key5.play();
      break;

    case "h":
      var key6 = new Audio('sounds/csd1.mp3');
      key6.play();
      break;

    case "j":
      var key7 = new Audio('sounds/a.mp3');
      key7.play();
      break;

    case "k":
      var key8 = new Audio('sounds/gs.mp3');
      key8.play();
      break;

    default:
      console.log(buttonInnerHTML)

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

//sequence function
var buffer = [];
var perfectBuffer = ["a", "a", "a", "s", "d", "d", "d", "f", "g", "g", "g", "h", "j", "j", "k", "a"];
// key sequence
function confirmedWavyKey(){
  buffer.push(event.key);
  console.log(buffer);
  if (buffer.join(',') === perfectBuffer.join(',')) {
    document.querySelector('.unlockContainer').classList.remove('hidden');
  }
}
// click sequence
function confirmedWavyClick(key){
  buffer.push(key);
  console.log(buffer);
  if (buffer.join(',') === perfectBuffer.join(',')) {
    document.querySelector('.unlockContainer').classList.remove('hidden');
  }
}
