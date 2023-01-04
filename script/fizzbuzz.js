const inputMin = document.getElementById("minInput");
const inputMax = document.getElementById("maxInput");
const main = document.getElementById("container");

inputMin.value = 1;
inputMax.value = 100;

const create = function () {
  // Remove existing child elements from the "main" element
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  // Create 100 divs and hide those that do not match input values
  for (let i = 1; i <= 100; i++) {
    // Create a new div element and a new p element
    let div = document.createElement('div');
    let par = document.createElement('p');
    // Append the p element to the div element
    div.appendChild(par);
    // Give the div element an ID and append it to the "main" element
    main.appendChild(div).setAttribute('id', 'myid' + i);

    // Hide the div element if it is outside the input range
    if (i < inputMin.value || i > inputMax.value) {
      div.style = 'display: none';
    } else {
      // Add a class and inner text to the div element according to the value of i
      if (i % 3 === 0 && i % 5 === 0) {
        div.classList.add('fizzbuzz');
        par.innerText = 'FizzBuzz';
      } else if (i % 3 === 0) {
        div.classList.add('fizz');
        par.innerText = 'Fizz';
      } else if (i % 5 === 0) {
        div.classList.add('buzz');
        par.innerText = 'Buzz';
      } else {
        div.classList.add('other');
        par.innerText = i;
      }
    }
  }
};

create();


//this checks the values for minInput
inputMin.addEventListener('keyup', function (e) {
  this.value = inputMin.value.replace(/^(0*)/, '');
  if (inputMin.value >= 1 && inputMin.value <= 100) {
    this.value = inputMin.value;
  } else if (inputMin.value.length === 0) {
    inputMin.value = null;
  } else {
    inputMin.value = null;
    alert('Incorrect number!');
  }
  if (!(
    (e.code >= 'Numpad0' && e.code <= 'Numpad9') ||
    (e.code >= 'Digit0' && e.code <= 'Digit9') ||
    e.code === 'NumpadSubtract'
    ['Backspace', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) >= 0
  )) {
    return false;
  }
  create();
});

//this checks the values for maxInput
inputMax.addEventListener('keyup', function (e) {
  this.value = inputMax.value.replace(/^(0*)/, '');
  if (inputMax.value >= 1 && inputMax.value <= 100) {
    this.value = inputMax.value;
  } else if (inputMax.value.length === 0) {
    inputMax.value = null;
  } else {
    inputMax.value = null;
    alert('Incorrect number!');
  }
  if (!(
    (e.code >= 'Numpad0' && e.code <= 'Numpad9') ||
    (e.code >= 'Digit0' && e.code <= 'Digit9') ||
    e.code === 'NumpadSubtract'
    ['Backspace', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) >= 0
  )){
    return false;
  }
  create();
});

//this will create the reset and refresh button
const reset = document.getElementById("reset-button");
const refresh = document.getElementById("refresh-button");

reset.onclick = function(){
  inputMin.value = "";
  inputMax.value = "";
  create();
}

refresh.onclick = function(){
  inputMin.value = 1;
  inputMax.value = 100;
  create();
}

//this will select fizz, buzz, fizzbuzz
//for it to work click and unclick the button
$('#fizz-button').click(function () {
  $('.other, .buzz, .fizzbuzz').toggle();
});

$('#buzz-button').click(function () {
  $('.other, .fizz, .fizzbuzz').toggle();
});

$('#fizzbuzz-button').click(function () {
  $('.other, .buzz, .fizz').toggle();
});