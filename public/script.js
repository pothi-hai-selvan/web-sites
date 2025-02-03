// Select display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (button.id === "clear") {
      currentInput = "";
      operator = "";
      previousInput = "";
      display.value = "0";
    } else if (button.id === "equal") {
      if (currentInput && previousInput && operator) {
        const result = computeResult(previousInput, currentInput, operator);
        display.value = result;
        currentInput = result.toString();
        previousInput = "";
        operator = "";
      }
    } else if (button.classList.contains("operator")) {
      if (currentInput) {
        previousInput = currentInput;
        operator = value;
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function computeResult(num1, num2, operator) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  switch(operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return 0;
  }
}
