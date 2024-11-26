// // Conversion button functionality
// document.getElementById('convertButton').addEventListener('click', () => {
//   const steps = parseInt(document.getElementById('stepsInput').value, 10);
//   // const stepLengthInput = document.getElementById('stepLengthInput').value;
//   document.getElementById('stepLengthInput').addEventListener('input', function () {
//     const value = parseFloat(this.value);

//     // Clear the input if it's invalid
//     if (value < 0 || isNaN(value)) {
//       this.value = '';
//     }
//   });


//   // Default step length in meters if no custom input is provided
//   const defaultStepLength = 0.762; // meters
//   const stepLength = stepLengthInput ? parseFloat(stepLengthInput) : defaultStepLength;

//   //sent message if the user does'nt enter any number of steps
//   if (isNaN(steps) || steps < 0) {
//     document.getElementById('result').textContent = 'Please enter a valid number of steps.';
//     return;
//   }

//   if (stepLength <= 0 || isNaN(stepLength)) {
//     document.getElementById('result').textContent = 'Please enter a valid step length.';
//     return;
//   }

//   const kilometers = steps * stepLength / 1000; // Convert meters to kilometers
//   document.getElementById('result').textContent = `${kilometers.toFixed(3)} kilometers`;
// });

// // Clear button functionality
// document.getElementById('clearButton').addEventListener('click', function () {
//   // Clear the input fields
//   document.getElementById('stepsInput').value = '';
//   document.getElementById('stepLengthInput').value = '';

//   // Clear the result display
//   document.getElementById('result').textContent = '';
// });

//--------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// Event listener for the Convert button
document.getElementById('convertButton').addEventListener('click', function () {
  const stepsInput = document.getElementById('stepsInput').value;
  const stepLengthInput = document.getElementById('stepLengthInput').value;

  // Parse input values
  const steps = parseInt(stepsInput, 10);
  const defaultStepLength = 0.762; // Default step length in meters
  const stepLength = stepLengthInput ? parseFloat(stepLengthInput) : defaultStepLength;

  // Validate steps input
  if (isNaN(steps) || steps <= 0) {
    document.getElementById('result').textContent = 'Please enter a valid number of steps.';
    return;
  }

  // Validate step length input
  if (stepLength <= 0 || isNaN(stepLength)) {
    document.getElementById('result').textContent = 'Please enter a valid step length.';
    return;
  }

  // Calculate distance in kilometers
  const kilometers = (steps * stepLength) / 1000; // Convert meters to kilometers
  document.getElementById('result').textContent = `${kilometers.toFixed(3)} kilometers`;
});

// Event listener for the Clear button
document.getElementById('clearButton').addEventListener('click', function () {
  // Clear input fields
  document.getElementById('stepsInput').value = '';
  document.getElementById('stepLengthInput').value = '';

  // Clear result display
  document.getElementById('result').textContent = '';
});

// Input validation for the Step Length field
document.getElementById('stepLengthInput').addEventListener('input', function () {
  const value = parseFloat(this.value);

  // Reset the input field if the value is invalid (negative or non-numeric)
  if (value < 0 || isNaN(value)) {
    this.value = '';
  }
});

