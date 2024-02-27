for (i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makesound(this.innerHTML);
    buttonanimation(this.innerHTML);
  });
}

// function handleclick(event) {}
document.addEventListener("keydown", (event) => {
  keyy = event.key;
  makesound(keyy);
  buttonanimation(keyy);
});

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

function buttonanimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
