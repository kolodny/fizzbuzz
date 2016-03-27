module.exports = condition;

function condition(expression, block1, block2) {
  if (expression) block1(); else block2();
}
