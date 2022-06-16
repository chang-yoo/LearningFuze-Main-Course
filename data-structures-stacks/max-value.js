/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const greater = stack.pop();
    if (greater > max) {
      max = greater;
    }
  }
  return max;
}
