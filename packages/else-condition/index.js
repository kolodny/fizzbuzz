module.exports = elseCondition;

function elseCondition(block) {
  return function () {
    block();
  }
}
