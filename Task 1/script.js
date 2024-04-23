// Parašykite JavaScript kodą, kuris leistų vartotojui įvesti temperatūrą laipsniais Celsijaus ir
// matyti jos konversiją į:

//     Farenheitus (°F) | Formulė: °F = (°C * 9/5) + 32
//     Kelvinus (K) | Formulė: K = °C + 273.15

// Pastaba: Rezultatai turi būti matomi formoje su įvesties lauku ir mygtuku,
// ir rezultatai turi būti rodomi viduje <div id="output"></div> elemente.
// Užtikrinkite, kad naudotojo sąsaja turėtų bent minimalų stilių.

// Get the input field, submit button, and output div
const inputField = document.getElementById('search');
const submitBtn = document.getElementById('submit-btn');
const outputDiv = document.getElementById('output');

// Add an event listener to the submit button
submitBtn.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the value of the input field
  const tempCelsius = parseFloat(inputField.value);

  // Check if the input is a valid number
  if (isNaN(tempCelsius)) {
    outputDiv.textContent = 'Please enter a valid temperature in Celsius.';
    return;
  }

  // Convert Celsius to Fahrenheit
  const tempFahrenheit = (tempCelsius * 9/5) + 32;

  // Convert Celsius to Kelvin
  const tempKelvin = tempCelsius + 273.15;

  // Display the results
  outputDiv.textContent = `${tempCelsius}°C is ${tempFahrenheit}°F and ${tempKelvin}K`;
});