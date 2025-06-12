const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
let expression = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent.trim();
    if (value === "AC") {
      expression = "";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
    } else if (value === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
    } else {
      expression += value;
    }
    input.value = expression;
  });
});
