function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 5); // result2 is 5

console.log(result1, result2); // Output: 8, 5

// Uncommon bug: Type narrowing not working as expected.

function processValue(value: number | string): number {
  if (typeof value === 'string') {
    // Type narrowing should have made value a string, but it's still number | string
    return parseInt(value, 10);
  } else {
    return value;
  }
}

// this will generate an error in typescript
const num = processValue('10');
const num1 = processValue(10);
console.log(num,num1)