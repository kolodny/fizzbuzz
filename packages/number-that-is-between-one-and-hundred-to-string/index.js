module.exports = numberToString;

function numberToString(number) {
  return Number.prototype.toString.call(number);
}
