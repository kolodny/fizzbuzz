module.exports = lessThan;

function lessThan(limit) {
  return function (number) {
    return number < limit;
  }
}
