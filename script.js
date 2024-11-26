// // References to input fields and buttons
// const stepsInput = document.getElementById('stepsInput');
// const stepLengthInput = document.getElementById('stepLengthInput');
// const convertButton = document.getElementById('convertButton');
// const clearButton = document.getElementById('clearButton');
// const resultDisplay = document.getElementById('result');

// // Function to validate inputs and update the Convert button state
// function validateInputs() {
//   const steps = parseInt(stepsInput.value, 10);
//   const stepLength = parseFloat(stepLengthInput.value);

//   // Enable the Convert button only if inputs are valid
//   if (!isNaN(steps) && steps > 0 && (!stepLengthInput.value || (stepLength >= 1 && stepLength <= 1.5))) {
//     convertButton.disabled = false;
//   } else {
//     convertButton.disabled = true;
//   }
// }

// // Event listener for the Convert button
// convertButton.addEventListener('click', function () {
//   const steps = parseInt(stepsInput.value, 10);
//   const defaultStepLength = 0.762; // Default step length in meters
//   const stepLength = stepLengthInput.value ? parseFloat(stepLengthInput.value) : defaultStepLength;

//   // Perform the conversion
//   const kilometers = (steps * stepLength) / 1000; // Convert meters to kilometers
//   resultDisplay.textContent = `${kilometers.toFixed(3)} kilometers`;
// });

// // Event listener for the Clear button
// clearButton.addEventListener('click', function () {
//   // Clear input fields
//   stepsInput.value = '';
//   stepLengthInput.value = '';

//   // Clear the result display
//   resultDisplay.textContent = '';

//   // Disable the Convert button after clearing
//   convertButton.disabled = true;
// });

// // Input validation for Step Length
// stepLengthInput.addEventListener('input', function () {
//   const value = parseFloat(this.value);

//   // If input is out of range, reset the field
//   if (value < 1 || value > 1.5) {
//     this.value = '';
//   }

//   validateInputs(); // Revalidate inputs
// });

// // Input event listeners for dynamic validation
// stepsInput.addEventListener('input', validateInputs);

// // Initial validation state
// validateInputs();









// References to input fields and buttons
const stepsInput = document.getElementById('stepsInput');
const stepLengthInput = document.getElementById('stepLengthInput');
const convertButton = document.getElementById('convertButton');
const clearButton = document.getElementById('clearButton');
const resultDisplay = document.getElementById('result');

// Function to validate inputs and update the Convert button state
function validateInputs() {
  const steps = parseInt(stepsInput.value, 10);
  const stepLength = parseFloat(stepLengthInput.value);

  // Enable the Convert button only if inputs are valid
  if (!isNaN(steps) && steps > 0 && (!stepLengthInput.value || (stepLength >= 1 && stepLength <= 1.5))) {
    convertButton.disabled = false;
  } else {
    convertButton.disabled = true;
  }
}

// Event listener for the Convert button
convertButton.addEventListener('click', function () {
  const steps = parseInt(stepsInput.value, 10);
  const defaultStepLength = 0.762; // Default step length in meters
  const stepLength = stepLengthInput.value ? parseFloat(stepLengthInput.value) : defaultStepLength;

  // Perform the conversion
  const kilometers = (steps * stepLength) / 1000; // Convert meters to kilometers
  resultDisplay.textContent = `${kilometers.toFixed(3)} kilometers`;
});

// Event listener for the Clear button
clearButton.addEventListener('click', function () {
  // Clear input fields
  stepsInput.value = '';
  stepLengthInput.value = '';

  // Clear the result display
  resultDisplay.textContent = '';

  // Disable the Convert button after clearing
  convertButton.disabled = true;
});

// Input validation for Step Length
stepLengthInput.addEventListener('input', function () {
  // Remove any non-numeric characters except the decimal point
  this.value = this.value.replace(/[^0-9.]/g, '');

  // If input is out of range, reset the field
  const value = parseFloat(this.value);
  if (value < 1 || value > 1.5) {
    this.value = '';
  }

  validateInputs(); // Revalidate inputs
});

// Input event listeners for dynamic validation
stepsInput.addEventListener('input', validateInputs);

// Initial validation state
validateInputs();
