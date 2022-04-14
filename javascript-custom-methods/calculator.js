/* exported calculator */
var calculator = {
  add: function(x,y){
    var result = x + y;
    return result;
  },
  subtract: function(x,y){
    var result = x-y;
    return result
  },
  multiply: function (x,y){
    var result = x*y;
    return result
  },
  divide: function(x,y){
    var result = x / y;
    return result
  },
  square: function(x){
    var result = x * x;
    return result;
  },
  sumAll: function(numbers){
    var result = 0;
    for(var i = 0; i <numbers.length; i++){
      result += numbers[i];
    }
    return result;
  },
  getAverage: function(numbers){
    var result = 0;
    for(var i = 0; i < numbers.length; i++){
      result += numbers[i]
      var averageResult = result / numbers.length;
    }
    return averageResult
  }
}
