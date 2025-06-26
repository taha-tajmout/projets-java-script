const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("inputs");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    if (isNaN(value)) return; // pour éviter les NaN si l'entrée est vide

    switch (e.target.name) {
      case "celcius":
        fahrenheit.value = (value * 1.8 + 32).toFixed(2);
        kelvin.value = (value + 273.15).toFixed(2);
        break;
      case "fahrenheit":
        celcius.value = ((value - 32) / 1.8).toFixed(2);
        kelvin.value = ((value - 32) / 1.8 + 273.15).toFixed(2);
        break;
      case "kelvin":
        celcius.value = (value - 273.15).toFixed(2);
        fahrenheit.value = ((value - 273.15) * 1.8 + 32).toFixed(2);
        break;
    }
  });
}
