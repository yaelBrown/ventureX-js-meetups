// https://repl.it/live/EP_Vmrz_hWI5JA

// function animal() {
//   console.log('moving around all animal-like')
// }

// animal()



// function animal() {
//   function move() {
//     console.log('moving around all animal-like')
//   }
// }

// animal.move()



// function animal() {
//   this.move = function() {
//     console.log('moving around all animal-like')
//   }
// }

// animal.move()


// animal().move()


// let myAnimal = new animal
// myAnimal.move()


// let cat = new animal
// cat.move()
// let fish = new animal
// fish.move()


// Practice: Make a person function with a speak method.  Create a few people and make them speak.
// 5 min

// function animal() {
//   this.move = function() {
//     console.log('moving around all animal-like')
//   }
// }

// animal.prototype.fur = 'really furry'
// console.log(animal.prototype)

// let cat = new animal
// cat.move = function() {
//   console.log('prowling around like a cat')
// }
// cat.move()
// let fish = new animal
// fish.move()



// let cat = new animal
// cat.move = function() {
//   console.log('prowling around like a cat')
// }
// cat.move()

// let fish = new animal
// fish.move = function() {
//   console.log('swimming along, kinda fishy')
// }
// fish.move()


// Practice: Redefine the speak method for each person and have them each say a catchy phrase.
// 5 min

// function animal() {
//   this.move = function() {
//     console.log('moving around all animal-like')
//   }
// }

// animal.move = function() {
//   console.log('moving majestically')
// }
// let cat = new animal
// cat.move()
// let fish = new animal
// fish.move()

// // Remember this?
// // animal.move()




// let animal = function() {

// }

// animal.prototype.move = function() {
//   console.log('moving majestically')
// }
// animal.prototype.legCount = 4

// let cat = new animal
// cat.move()
// console.log(cat.legCount)
// let fish = new animal
// fish.move()
// fish.legCount = 0
// console.log(fish.legCount)



// function animal() {
//   this.move = function() {
//     console.log('moving around all animal-like')
//   }
// }

// animal.prototype.move = function() {
//   console.log('moving majestically')
// }

// let cat = new animal
// cat.move()
// let fish = new animal
// fish.move()



// function animal() {
//   this.move = function() {
//     console.log('moving around all animal-like')
//   }
// }

// let cat = new animal

// animal.prototype.move = function() {
//   console.log('moving majestically')
// }

// cat.move()
// let fish = new animal
// fish.move()



function animal(name) {
  this.name = name
  this.move = function() {
    console.log('moving around like a ' + this.name)
  }
}

animal.prototype.emote = function() {
  if(this.name == 'cat') {
    console.log('meow')
  }
  else if(this.name == 'fish') {
    console.log('burble')
  }
}

let cat = new animal('cat')
cat.move()
cat.emote()
let fish = new animal('fish')
fish.move()
fish.emote()


// Practice: Add name, gender, and some other constructor parameters to your person function.  Modify your speak method to include the name of the speaker, e.g. "X says: ...".  Add some more methods using the function prototype.  Examples: wakeUp(), doChores(), shop(), etc., using conditional logic based on the person's properties.
// 10 min



// function animal(name) {
//   this.name = name
// }

// animal.prototype.move = function() { 
//   console.log('movin')
// }

// function cat(name) {
//   animal(name)
//   // animal.apply(this, arguments)
// }

// // cat.prototype = animal.prototype

// let bella = new cat('bella')

// console.log(bella.name)
// bella.move()


// Practice: Make another function for a special type of person, like an astronaut or scuba diver, that extends the person function.  Show that properties and methods are inherited from the superfunction.
// 10 min