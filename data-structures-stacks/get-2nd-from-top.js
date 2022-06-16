/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const first = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(first);
    return undefined;
  }
  const second = stack.peek();
  stack.push(first);
  return second;
}
