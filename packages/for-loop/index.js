module.exports = forLoop;

function forLoop(starting, condition, finalExpression, statement) {
  for (var index = starting; condition(index); index = finalExpression(index)) {
    statement(index);
  }
}
