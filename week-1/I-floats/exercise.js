var numberOfStudents = 15;
var numberOfMentors = 8;

var totalnumber = numberOfStudents + numberOfMentors;
var percentageOfStudents = Math.round((numberOfStudents/totalnumber)*100);
var percentageOfMentors = Math.round((numberOfMentors/totalnumber)*100);

console.log(totalnumber);
console.log(percentageOfStudents);
console.log(percentageOfMentors);
console.log("Percentage of students: " + percentageOfStudents + "%");
console.log("Percentage of mentors: " + percentageOfMentors + "%");

