var add = function(number1, number2) {
  return number1 + number2;
};

var minus = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert("The sum is " + add(number1, number2) + ".");

alert("The difference is " + minus(number1, number2) + ".");

alert("The product is " + multiply(number1, number2) + ".");

alert("The ratio is " + divide(number1, number2) + ".");
