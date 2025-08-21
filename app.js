const display = document.getElementById('display');

    function appendValue(value) {
      display.value += value;
    }

    function allclearDisplay(){
      display.value = '';
    }

    function clearDisplay() {
      display.value = display.value.slice(0, -1);
    }
    

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = 'Error';
      }
    }


document.addEventListener("keydown", function(event) {
  const key = event.key;
  const allowedKeys = "0123456789+-*/.";

  if (allowedKeys.includes(key)) {
    appendValue(key); // add the key to the display
  } else if (key === "Enter") {
    calculate(); // calculate result
  } else if (key === "Backspace") {
    backspace(); // remove last character
  } else if (key === "Escape") {
    clearDisplay(); // clear input
  }
});

function backspace() {
  display.value = display.value.slice(0, -1);
}