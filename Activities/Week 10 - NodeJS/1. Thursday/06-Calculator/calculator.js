let operator = process.argv[2];
let number1 = process.argv[3];
let number2 = process.argv[4];

// add 1 2` ... and outputs 3

if (operator === 'add') {
  console.log('You added!');
  console.log(parseFloat(number1) + parseFloat(number2));
  console.log('-----------');
  // subtract 5 2` ... and outputs 3
} else if (operator === 'minus') {
  console.log('You subtracted!');
  console.log(parseFloat(number1) - parseFloat(number2));
  console.log('-----------');
} // multiply 3 2` ... and outputs 6
else if (operator === 'times') {
  console.log('You multiplied!');
  console.log(parseFloat(number1) * parseFloat(number2));
  console.log('-----------');
}
// divide 8 2` ... and outputs 4
else if (operator === 'divide') {
  console.log('You divided!');
  console.log(parseFloat(number1) / parseFloat(number2));
  console.log('-----------');
}
// remainder 7 2`... and outputs 1
else if (operator === 'leftover') {
  console.log('Your remainder is!');
  console.log(parseFloat(number1) % parseFloat(number2));
  console.log('-----------');
} else if (operator === 'exp') {
  console.log('To the power');
  console.log(parseFloat(number1) ** parseFloat(number2));
  console.log('-----------');
} else if (operator === 'algebra') {
  console.log('algebra baby');
  console.log(parseFloat(number1) ** parseFloat(number2));
  console.log('-----------');
}
