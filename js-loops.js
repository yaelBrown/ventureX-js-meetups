// let cars = [{
//   brand: 'mazda',
//   miles: 5000
// },{
//   brand: 'ford',
//   miles: 100000
// },{
//   brand: 'honda',
//   miles: 40000
// },{
//   brand: 'hyundai',
//   miles: 0
// }]

// Find the honda object, given an array of car objects, using a for loop (do not use built-in array functions).  Let the result be null if there's no honda in the array.



// Practice: Make an array of animal objects, each with "species" and "averageLifespan" properties.  Find the lion object, both with a function, and in scope, using a for loop (do not use built-in array functions).

/*
  facts
    jaguar: 12
    lynx: 7
    lion: 14

*/




let animals = [{
  species: "Jaguar",
  lifespan: 12
},
{
  species: "lynx",
  lifespan: 7
},
{
  species: "lion",
  lifespan: 14
},
{
  species: "leopard",
  lifespan: 12
}
];

// console.log(animals);

let foundLion = false;

// For for-of loops (L57) variable has to be singular 'of' the array. 

function findLion(animals) {
  for (let animal of animals) {    // creating variable and adding each element then checking it, then changing its contents.
    if (animal.species === "lion") {
      foundLion = true;
      console.log(animal.species + " average lifespan is " + animal.lifespan);
    }
  }



  // for (var i = 0; i < animals.length; i++) {
  //   if (animals[i].species == "lion") {
  //     foundLion = true;
  //     console.log(animals[i].species + " average lifespan is " + aniamls[i].lifespan);
  //   }
  // }
}

// findLion(animals);

// console.log(foundLion)

// Practice: Find the animal with the shortest average lifespan.


const shortestLifespan = (animals) => {
  let shortest = 100; // could use Number.MAX javascript has a maximum safe value
  let speciez = "";
  for (let animal of animals) {
    if (animal.lifespan < shortest) {
      shortest = animal.lifespan;
      speciez = animal.species;
    }
  }
  // console.log("the shortest lifespan is " + shortest + " and is the " + speciez);
  return speciez;
}

// shortestLifespan(animals);

// Sort animal array from shortest to longest lifespan

const youngestToOldestLifespan = (animals) => {
  let sorted = [];
  let unsorted = animals;
  let shortestIndex;
  // let shortestName;

  while (animals.length > 0) {
    sorted.push(shortestLifespan(unsorted));
    shortestIndex = unsorted.indexOf(sorted[0]);
    unsorted.splice(shortestIndex);
  }

  console.log(sorted);
}



youngestToOldestLifespan(animals);





