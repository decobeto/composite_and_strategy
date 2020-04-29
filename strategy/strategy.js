var Greeter = function(strategy) {
  this.strategy = strategy
}

Greeter.prototype.greet = function() {
  return this.strategy()
}

let politeGreetingStrategy = function() {
  console.log("Olá!")
}

let friendlyGreetingStrategy = function() {
  console.log("E ai brother belezea?") 
}

var boredGreetingStrategy = function() {
  console.log("Opa bão")
}

const politeGreeter   = new Greeter(politeGreetingStrategy)
const friendlyGreeter = new Greeter(friendlyGreetingStrategy)
const boredGreeter    = new Greeter(boredGreetingStrategy)

politeGreeter.greet()  
friendlyGreeter.greet() 
boredGreeter.greet()    