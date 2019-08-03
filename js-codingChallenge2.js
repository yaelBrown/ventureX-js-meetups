/*
  Create randomly placed stars in the console.
*/


function randomlyPlacedStars(num) {

  var randomNum = Math.floor(Math.random() * 10)
  var starRow = "* * * * * * * * * *"
  var tempArr = [];

  while (num >= 0 ) {
    console.log(starRow);
    // starRow.setCharAt(randomNum, " ");
    --num;
    console.log(starRow);
  }

}

randomlyPlacedStars(10);

console.log(Math.floor(Math.random() * 100));