// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function captialise(str) {
  var stringtoarray = str.split("");
  stringtoarray[0] = stringtoarray[0].toUpperCase();
  var output = stringtoarray.join("");
  return output;

  // complete this function
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var mentorsTidy = mentors.map(tidyUpString);
mentorsTidyAndCapitalised = mentorsTidy.map(captialise);

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
