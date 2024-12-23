function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

const result1 = add(5, 3); // result1 is 8
const result2 = subtract(10, 5); // result2 is 5

console.log(result1, result2); // Output: 8, 5

// Solution: Using type assertion
function processValue(value: number | string): number {
  if (typeof value === 'string') {
    // Type assertion:  Tell TypeScript that value is definitely a string
    return parseInt(value as string, 10);
  } else {
    return value;
  }
}

//Alternative Solution: Using a more explicit type guard
function processValueAlternative(value: number | string): number {
  if(typeof value === 'string' && !isNaN(Number(value))){
    return Number(value)
  } else if (typeof value === 'number'){
    return value
  }else{
    throw new Error('Invalid input type')
  }
}

const num = processValue('10');
const num1 = processValue(10);
const num2 = processValueAlternative('10')
const num3 = processValueAlternative(10)
console.log(num,num1,num2,num3) 