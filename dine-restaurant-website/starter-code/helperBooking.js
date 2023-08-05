document.addEventListener("DOMContentLoaded", () => {
  const minusButton = document.querySelector(".minus-btn");
  const plusButton = document.querySelector(".plus-btn");
  const spanField = document.getElementById("people");

  minusButton.addEventListener("click", () => {
    const currentValue = parseInt(spanField.textContent);
    if (currentValue > 1) {
      const newValue = currentValue - 1;
      spanField.setAttribute("data-value", newValue);
      spanField.textContent = `${newValue} People`;
    }
  });

  plusButton.addEventListener("click", () => {
    const currentValue = parseInt(spanField.textContent);
    const max = 10;
    if (currentValue < max) {
      const newValue = currentValue + 1;
      spanField.setAttribute("data-value", newValue);
      spanField.textContent = `${newValue} People`;
    }
  });
});

document.getElementById("scrollButton").addEventListener("click", function () {
  const targetElement = document.getElementById("form");
  targetElement.scrollIntoView({ behavior: "smooth" });
});
