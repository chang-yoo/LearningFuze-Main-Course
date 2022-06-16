/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let lastValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return lastValue;
  }
  while (lastValue >= queue.peek()) {
    queue.enqueue(lastValue);
    lastValue = queue.dequeue();
  }
  return lastValue;
}
