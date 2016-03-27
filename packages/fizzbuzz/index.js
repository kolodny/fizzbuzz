var zero = require("number-zero");
var hundred = require("number-one-hundred");
var isDivisibleBy5 = require("is-divisible-by-5");
var isDivisibleBy3 = require("is-divisible-by-3");
var isDivisibleBy5and3 = require("is-divisible-by-5-and-3");
var numberToString = require("number-that-is-between-one-and-hundred-to-string");
var fizzbuzz = require("string-fizz-buzz");
var fizz = require("string-fizz");
var buzz = require("string-buzz");
var incrementByOne = require("increment-by-one");
var forLoop = require("for-loop");
var ifCondition = require("if-condition");
var elseIfCondition = require("else-if-condition");
var elseCondition = require("else-condition");
var lessThan = require("less-than");
var print = require("print-string");


forLoop(zero, lessThan(hundred), incrementByOne, function(i) {
  ifCondition(isDivisibleBy5and3(i), print(fizzbuzz),
      elseIfCondition(isDivisibleBy3(i), print(fizz),
          elseIfCondition(isDivisibleBy5(i), print(buzz),
              elseCondition(print(numberToString(i))))));
});
