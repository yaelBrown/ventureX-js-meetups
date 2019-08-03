/* 
  Find and print out the number to the 1000th in the fibonacci sequence
*/

function findFib(num) {
  var a = 0, b = 1, temp;

  while (num >= 0) {
    temp = a + b;
    console.log(temp);
    a = b
    b = temp;
    console.log("b is " + b);
    console.log("a is " + a);
    num--;
  }

  console.log(a);
}

findFib(1000);


// change line 8 to '2'. You are displaying the 999th number