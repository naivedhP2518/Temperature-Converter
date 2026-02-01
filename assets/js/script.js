const inputTemp = document.getElementById("inputTemp");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const historyDiv = document.getElementById("history");
const themeToggle = document.getElementById("themeToggle");
const logo = document.querySelector(".logo");

// Conversion Function
function convertTemp() {
  let val = parseFloat(inputTemp.value);
  if (isNaN(val)) {
    result.textContent = "Please enter a number.";
    return;
  }

  let celsius;
  switch (fromUnit.value) {
    case "C":
      celsius = val;
      break;
    case "F":
      celsius = ((val - 32) * 5) / 9;
      break;
    case "K":
      celsius = val - 273.15;
      break;
    case "R":
      celsius = ((val - 491.67) * 5) / 9;
      break;
  }

  let finalVal;
  switch (toUnit.value) {
    case "C":
      finalVal = celsius;
      break;
    case "F":
      finalVal = (celsius * 9) / 5 + 32;
      break;
    case "K":
      finalVal = celsius + 273.15;
      break;
    case "R":
      finalVal = ((celsius + 273.15) * 9) / 5;
      break;
  }

  result.textContent = `${val}°${fromUnit.value} = ${finalVal.toFixed(2)}°${toUnit.value}`;
  let entry = document.createElement("div");
  entry.textContent = result.textContent;
  historyDiv.prepend(entry);
}

// Theme Handling
// Theme Handling
function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    themeToggle.checked = true;
  } else {
    document.body.classList.remove("light");
    themeToggle.checked = false;
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

// Toggle
themeToggle.addEventListener("change", () => {
  const newTheme = themeToggle.checked ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// Cursor Glow Effect
const cursorGlow = document.getElementById("cursorGlow");
document.addEventListener("mousemove", (e) => {
  if (cursorGlow) {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  }
});

// Hide Cursor on Card
const glassCard = document.querySelector(".glass-card");
if (glassCard && cursorGlow) {
  glassCard.addEventListener("mouseenter", () => {
    cursorGlow.style.opacity = "0";
  });
  glassCard.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0.8";
  });
}
