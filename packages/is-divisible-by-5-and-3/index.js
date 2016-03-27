var isDivisibleBy5 = require("is-divisible-by-5");
var isDivisibleBy3 = require("is-divisible-by-3");

module.exports = isDivisibleBy5and3;

function isDivisibleBy5and3(number) {
  return isDivisibleBy5(number) && isDivisibleBy3(number);
}
