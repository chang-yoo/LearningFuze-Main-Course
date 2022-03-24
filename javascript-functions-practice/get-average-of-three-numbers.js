/* exported getAverageOfThreeNumbers */
function getAverageOfThreeNumbers(x,y,z){
  var average = (x+y+z)/3;
  return average;
}

var getAverageOfThreeNumbersResult = getAverageOfThreeNumbers(2,4,6);
console.log('average of three numbers: ', getAverageOfThreeNumbersResult);
