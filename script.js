function changeColor() {
  var red = document.getElementById('inputred').value;
  var green = document.getElementById('inputgreen').value;
  var blue = document.getElementById('inputblue').value;
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')';

  document.getElementById('rgb').innerHTML = color;
  var display = document.getElementById('display');
  display.style.backgroundColor = color;
}
document.getElementById('inputred').addEventListener('input', changeColor);
document.getElementById('inputblue').addEventListener('input', changeColor);
document.getElementById('inputgreen').addEventListener('input', changeColor);

var sliderred = document.getElementById('inputred'); // o slider red
var outputred = document.getElementById('demored'); // txt red
var slidergreen = document.getElementById('inputgreen');
var outputgreen = document.getElementById('demogreen');
var sliderblue = document.getElementById('inputblue');
var outputblue = document.getElementById('demoblue');

outputred.innerHTML = sliderred.value;
outputgreen.innerHTML = slidergreen.value;
outputblue.innerHTML = sliderblue.value;

sliderred.oninput = function () {
  outputred.innerHTML = this.value;
};

slidergreen.oninput = function () {
  outputgreen.innerHTML = this.value;
};

sliderblue.oninput = function () {
  outputblue.innerHTML = this.value;
};
