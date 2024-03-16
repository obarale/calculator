function addOnDisplay(value) {
  document.getElementById("displayNumber").value += value;
}

function clearScreen(value) {
  document.getElementById("displayNumber").value = "";
}

function answerBtn() {
  var a = document.getElementById("displayNumber").value;
  var b = eval(a);
  document.getElementById("displayNumber").value = b;
}
