function convert() {
  const type = document.getElementById("conversionType").value;
  const value = parseFloat(document.getElementById("inputValue").value);
  let result = "";

  if (isNaN(value)) {
    result = "Please enter a valid number.";
  } else {
    if (type === "length") {
      const metersToFeet = (value * 3.28084).toFixed(2);
      const feetToMeters = (value / 3.28084).toFixed(2);
      result = `${value} meters = ${metersToFeet} feet\n${value} feet = ${feetToMeters} meters`;
    } else if (type === "temperature") {
      const cToF = (value * 9 / 5 + 32).toFixed(2);
      const fToC = ((value - 32) * 5 / 9).toFixed(2);
      result = `${value} °C = ${cToF} °F\n${value} °F = ${fToC} °C`;
    } else {
      result = "Unknown conversion type.";
    }
  }

  document.getElementById("result").innerText = result;
}