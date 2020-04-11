// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain
// first the boolean value given to ishappy was string which should be removed. and convert it to false. coz if and esle function takes true and false respectively.

var isHappy = false; 

if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
