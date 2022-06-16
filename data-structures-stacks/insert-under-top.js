/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const peek = stack.pop();
  stack.push(value);
  stack.push(peek);
}
