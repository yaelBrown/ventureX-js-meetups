"use stict";

// class Bank {
//   constructor() {
//     let balance = 0;

//     this.withdraw = function withdraw(amt) {
//       balance = balance - amt;
//       return balance - amt;
//     }

//     this.deposit = function deposit(amt) {
//       balance = balance + amt;
//       return balance + amt;
//     }

//     this.checkBal = function checkBal() {
//       return balance;
//     }
//   }
// }


// var steve = new Bank;

// console.log(steve.checkBal());

// console.log(steve.deposit(120));

// console.log(steve.withdraw(12));

// console.log(steve.checkBal());

// steve.balance = 1000;

// console.log(steve.checkBal());



// inheritance encourage code reuse. inheriting 

// class Building {
//   constructor() {
//     let isFrontDoorOpen = false;

//     this.openDoor = function() {
//       isFrontDoorOpen = true;
//       console.log("The door is opening");
//     }

//     this.closeDoor = function() {
//       isFrontDoorOpen = false;
//       console.log("The door is closing");
//     }

//     this.doorStatus = function() {
//       if (isFrontDoorOpen) {
//         console.log("The door is OPEN!");
//       } else {
//         console.log("The door is CLOSED!");
//       }
//     }

//   }
// }


// class House extends Building {
//   constructor() {
//     super();
//     let garage = "false";

//     this.closeGarage = function() {
//       garage = false; 
//       console.log("The garage is closed now");
//     }

//     this.openGarage = function() {
//       garage = true;
//       console.log("The garage is open now")
//     }

//     this.garageStatus = function() {
//       (garage) ? console.log("The garage is open") : console.log("The garege is closed.");
//     }

//   }
// }



// var crib = new House;

// crib.doorStatus();
// crib.openDoor();
// crib.doorStatus();
// crib.closeGarage();


// Abstraction - refers to being able to specify what a class should do but not what their methods are.

// Interfaces - lets us write our business logic without writing any functionality. JS does not support interfaces natively. Java does. 























// Radu's code






















// https://repl.it/live/Sd43Oh3VDbuBvA
// encapsulation

// class Car {
//   drive(miles) {
//     this.odometer += miles
//   }

//   constructor() {
//     this.odometer = 0
//   }
// }

// let myCar = new Car
// console.log(myCar.odometer)
// myCar.drive(100)
// console.log(myCar.odometer)

// // // about to commit fraud ...
// myCar.odometer = 0
// console.log(myCar.odometer)
// // // sell car at carmax for profit




// let's secure our car ...

// class Car {
//   constructor() {
//     let odometer = 0

//     this.drive = function(miles) {
//       odometer += miles
//     } 







//     this.readOdometer = function() {
//       return odometer
//     }
//   }
// }

// let myCar = new Car
// // console.log(myCar.odometer) // not defined!
// console.log(myCar.readOdometer())
// myCar.drive(100)
// console.log(myCar.readOdometer())

// // try to commit fraud ...
// myCar.odometer = 0
// console.log(myCar.odometer) // yes, but ...
// console.log(myCar.readOdometer())

// Practice: Make a class representing a bank account.  Keep track of the account balance, and allow the customer to deposit and withdraw via class methods.  Don't let them affect the account balance without calling these methods.

// https://repl.it/live/Sd43Oh3VDbuBvA
// class BankAccount {
//   constructor() {
//     this.deposit = function(amount) {
//       // do stuff here
//     }

//     this.withdraw = function(amount) {
//       // do stuff here
//     }

//     this.viewBalance = function() {
//       // do stuff here
//     }
//   }
// }
// // https://repl.it/live/Sd43Oh3VDbuBvA
// let myAccount = new BankAccount
// myAccount.deposit(50)
// myAccount.viewBalance()


// here's an example where you would want a public property (per Ajay's question)

// class Whiteboard {
//   constructor() {
//     let location = 'Lounge'
//     this.message = 'Nothing here yet'

//     this.getLocation = function() {
//       return location
//     }
//   }
// }

// let myWhiteboard = new Whiteboard()
// console.log(myWhiteboard.message)

// myWhiteboard.message = 'Hi there!'
// console.log(myWhiteboard.message)

// console.log(myWhiteboard.getLocation())
// myWhiteboard.location = 'Bathroom'
// console.log(myWhiteboard.getLocation())



// inheritance


// class Cat {
//   speak() {
//     console.log('meow')
//   }

//   move() {
//     console.log('moving 10 feet')
//   }

//   hunt() {
//     console.log('pouncing stealthily')
//   }
// }

// class Mouse {
//   speak() {
//     console.log('squeak')
//   }

//   move() {
//     console.log('moving 9 feet')
//   }

//   findCheese() {
//     console.log('finding cheese expertly')
//   }
// }

// let myCat = new Cat
// let myMouse = new Mouse

// myCat.speak()
// myMouse.speak()
// myCat.move()
// myMouse.move()


// what if we want to change how an animal speaks?



// let's eliminate some duplicate code (and save time) ...


class Animal {
  speak() {
    console.log(`${this.sound}`)
  }

  move() {
    console.log(`moving ${this.speed} feet`)
  }
}

class Cat extends Animal {
  constructor() {
    super()
    this.sound = 'meow'
    this.speed = 10
  }

  hunt() {
    console.log('pouncing stealthily')
  }
}

class Mouse extends Animal {
  constructor() {
    let loveOfCheese = 'very high'
    super()
    this.sound = 'squeak'
    this.speed = 15 * Math.random()
  }

  findCheese() {
    console.log('finding cheese expertly')
  }
}

let myCat = new Cat
let myMouse = new Mouse

myCat.speak()
myMouse.speak()
myCat.move()
myMouse.move()



// what if we want to change how an animal speaks?

// https://repl.it/@istrate

// Practice: A house, a hotel, a haberdashery.  Make a class for each, with some methods to provide relevant functionality.  Abstract common functionality into a superclass that each class extends.


// abstraction


// Animal contains our common functionality, but we shouldn't
// be able to instantiate an Animal

// // emulate an abstract class in javascript

// /* abstract */ class Animal {
//   constructor() { 
//     if(this.constructor.name === 'Animal') 
//       throw 'cannot instantiate an abstract class'
//   }

//   speak() {
//     console.log(`${this.sound}`)
//   }

//   move() {
//     console.log(`just moved ${this.speed} feet`)
//   }
// }

// class Cat extends Animal {
//   constructor() {
//     super()
//     this.sound = 'meow'
//     this.speed = 10
//   }
// }

// let myAnimal = new Animal // nope!
// // let myCat = new Cat // yep
// // myCat.move()


// // with interfaces, we can write our business logic code without first having implemented any particular animal, or implemented any animal functionality whatsoever

// // emulate an interface in javascript
// /* interface */ class Animal {
//   constructor() { 
//     if(this.constructor.name === 'Animal') 
//       throw 'cannot instantiate an interface'
//   }

//   speak() { throw 'not implemented' }
//   move() { throw 'not implemented' }
// }

// function enticeAnimalWithTreats(animal) {
//   // emulate requiring an animal interface
//   // in a static-typed language, this would produce a compile-time
//   // error.  in javascript, we would only get a run-time error
//   if(!(animal instanceof Animal)) throw 'Not an animal'
//   animal.move()
//   animal.speak()
// }

// // Animal.instance = true  // this will not work
// let myAnimal = new Animal
// enticeAnimalWithTreats(myAnimal)
// // enticeAnimalWithTreats('cat')   // run-time error


// class Cat extends Animal {
//   constructor() {
//     super()
//   }

//   speak() {
//     console.log('meow')
//   }
//   move() { 
//     console.log('move stealthily')
//   }
// }

// let myCat = new Cat
// enticeAnimalWithTreats(myCat)



// polymorphism


// dynamic polymorphism (method overriding)


// class Animal {
//   speak() {
//     console.log('mumble incoherently')
//   }

//   move() {
//     console.log('move!')
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log('meow')
//   }
// }

// let myAnimal = new Animal
// myAnimal.speak()
// myAnimal.move()
// let myCat = new Cat
// myCat.speak()
// myCat.move()



// Practice: Make a Person class with a doFunActivity method.  Make a Student subclass that overrides this method.


// static polymorphism (method overloading)

// class Cat {
//   speak() {
//     console.log('meow')
//   }

//   speak(emotion) {  // unfortunately, we can't do this in javascript
//     if(emotion == 'surprise') {
//       console.log('meow!')
//     }
//     else {
//       this.speak()
//     }
//   }
// }

// let myCat = new Cat
// myCat.speak('surprise') // this works, but ...
// // myCat.speak()


// emulate overloading in javascript
// method 1: name methods according to method signature

// class Cat {
//   speak() {
//     console.log('meow')
//   }

//   speakWithEmotion(emotion) {
//     if(emotion == 'surprise') {
//       console.log('meow!')
//     }
//     else {
//       this.speak()
//     }
//   }
// }

// let myCat = new Cat
// myCat.speakWithEmotion('surprise')
// myCat.speakWithEmotion()
// myCat.speak()


// emulate overloading in javascript
// method 2: explicit argument inference

// class Cat {
//   speak() {
//     if(arguments[0] === 'surprise') {
//       console.log('meow!')
//     }
//     else {
//       console.log('meow')
//     }
//   }
// }

// let myCat = new Cat
// myCat.speak('surprise')
// myCat.speak()


// emulate overloading in javascript
// method 3: explicit type inference

// class Cat {
//   speak() {
//     if(typeof arguments[0] === 'string') {
//       if(arguments[0] === 'surprise') {
//         console.log('meow!')
//       }
//       else {
//         this.speak()
//       }
//     }
//     else if(typeof arguments[0] == 'number') {
//       for(let i = 0; i < arguments[0]; i++) {
//         this.speak()
//       }
//     }
//     else {
//       console.log('meow')
//     }
//   }
// }

// let myCat = new Cat
// myCat.speak('surprise')
// myCat.speak()
// myCat.speak(3)
// myCat.speak('3')


// Practice: Make a car class with an overloaded drive method.  Calling drive with a number drives that many miles.  Calling drive with a string drives to that particular location.