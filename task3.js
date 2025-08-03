function convertTemperature() {
  const input = document.getElementById("temperatureInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultDisplay = document.getElementById("resultDisplay");

  const temp = parseFloat(input);

  if (isNaN(temp)) {
    resultDisplay.innerText = "Please enter a valid number!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unit) {
    case "celsius":
      fahrenheit = (temp * 9 / 5) + 32;
      kelvin = temp + 273.15;
      resultDisplay.innerText = `${temp}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
      break;
    case "fahrenheit":
      celsius = (temp - 32) * 5 / 9;
      kelvin = celsius + 273.15;
      resultDisplay.innerText = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
      break;
    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9 / 5) + 32;
      resultDisplay.innerText = `${temp}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
      break;
    default:
      resultDisplay.innerText = "Unknown unit selected.";
  }
}
