

function calcPercentageStu(mentors, students){
    var total = mentors + students;
    var PercentageStudents = Math.round((students/total)*100);
    return PercentageStudents
}
function calcPercentageMen(mentors, students){
    var total = mentors + students;
    var PercentageMentors = Math.round((mentors/total)*100);
    return PercentageMentors;
}

function finalMessage(mentors, students){
    return "Percentage student: " + calcPercentageStu(mentors,students) + "\n" + "Percentage mentors: " + calcPercentageMen(mentors, students);
}




console.log(calcPercentageStu(15,8));
console.log(calcPercentageMen(15,8));
console.log(finalMessage(15,8));
