function ExampleConstructor(){

}

console.log(ExampleConstructor.prototype)
console.log(typeof ExampleConstructor.prototype)

var newExampleConstructor = new ExampleConstructor();
console.log(newExampleConstructor)

console.log(newExampleConstructor instanceof ExampleConstructor)
