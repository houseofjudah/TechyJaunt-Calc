function calculate(num1, num2, operation) {
    // Validate input numbers
    if (num1 === null || num1 === undefined || num2 === null || num2 === undefined) {
      throw new Error('Both inputs must be numbers');
    }
  
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Both inputs must be numbers');
    }
  
    // Validate operation
    const arithematicOperations = ['add', 'subtract', 'multiply', 'divide'];
    if (!arithematicOperations.includes(operation)) {
      throw new Error(`Invalid operation. Allowed operations are: ${arithematicOperations.join(', ')}`);
    }
  
    // Perform operation
    let result;
    if (operation === 'add') {
      result = num1 + num2;
    } else if (operation === 'subtract') {
      result = num1 - num2;
    } else if (operation === 'multiply') {
      result = num1 * num2;
    } else if (operation === 'divide') {
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      result = num1 / num2;
    }
  
    return result;
  }
  
  // Test the function
  console.log(calculate(5, 3, 'add')); 
  console.log(calculate(10, 2, 'divide')); 
  console.log(calculate(7, 2, 'multiply')); 
  console.log(calculate(10, 5, 'subtract')); 


