module.exports = print;

function print(x) {
  return function() {
    console.log(x);
  };
}
