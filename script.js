let foc = document.getElementById("food-or-consequences");

foc.addEventListener('mouseenter', function() {
  foc.textContent = "It's too late to warn about the consequences, you better run";
  foc.style = "color: red;";
})

foc.addEventListener('mouseleave', function() {
  foc.textContent = "I am glad you survive for a few seconds, but she's right behind you...";
  foc.style = "color: purple;";
})
