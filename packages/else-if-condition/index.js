var ifCondition = require('if-condition');

module.exports = elseIfCondition;

function elseIfCondition(expression, block1, block2) {
  return function () {
    return ifCondition(expression, block1, block2);
  };
}
