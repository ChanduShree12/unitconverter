function convertUnits() {
    const value = parseFloat(document.getElementById("value").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    let result = 0;
  
    if (fromUnit === "mm" && toUnit === "cm") {
      result = value / 10;
    } else if (fromUnit === "cm" && toUnit === "mm") {
      result = value * 10;
    } else if (fromUnit === "cm" && toUnit === "m") {
      result = value / 100;
    } else if (fromUnit === "m" && toUnit === "cm") {
      result = value * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
      result = value / 1000;
    } else if (fromUnit === "km" && toUnit === "m") {
      result = value * 1000;
    } else if (fromUnit === "km" && toUnit === "mi") {
      result = value / 1.60934;
    } else if (fromUnit === "mi" && toUnit === "km") {
      result = value * 1.60934;
    } else {
      result = value;
    }
  
    document.getElementById("result").value = result.toFixed(2);
  }
  