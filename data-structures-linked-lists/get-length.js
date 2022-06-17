/* exported getLength */

function getLength(list) {
  let number = 0;
  while (list !== null) {
    number++;
    list = list.next;
  }
  return number;
}
