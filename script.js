function generateRandomNumbers() {
    var numbers = [];
    var min = 100; // Initialize min to a value lower than the possible range
    var max = 150; // Initialize max to a value higher than the possible range
  
    for (var i = 0; i < 10; i++) { // Change 10 to the desired number of random numbers
      var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      numbers.push(randomNumber);
  
      // Update min and max values
      if (randomNumber < min) {
        min = randomNumber;
      }
      if (randomNumber > max) {
        max = randomNumber;
      }
    }
  
    displayResult(numbers, min, max);
  }
  
  function displayResult(numbers, min, max) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
      <p>Generated Numbers: ${numbers.join(', ')}</p>
      <p>Minimum: ${min}</p>
      <p>Maximum: ${max}</p>
    `;
  }
  