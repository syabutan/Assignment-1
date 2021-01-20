// JavaScript source code
var submit = document.getElementById("submit");

//This function works when the botton is clicked
submit.addEventListener("click", function () {

    //Take percentage for each grade category from input and weight them 
    var assignment = parseFloat(document.getElementById("assignment").value) * .5;
    var group = parseFloat(document.getElementById("group").value) * .1;
    var quizz = parseFloat(document.getElementById("quizz").value) * .1;
    var exam = parseFloat(document.getElementById("exam").value) * .2;
    var intex = parseFloat(document.getElementById("intex").value) * .1;

    //Calcurate a final percentage
    var total = assignment + group + quizz + exam + intex;
    var letterGrade = "";

    //Determine a final letter based on the final percentage
    if (total >= 94) {
        letterGrade = "A";
    }
    else if (total >= 90) {
        letterGrade = "A-";
    }
    else if (total >= 87) {
        letterGrade = "B+";
    }
    else if (total >= 84) {
        letterGrade = "B";
    }
    else if (total >= 80) {
        letterGrade = "B-";
    }
    else if (total >= 77) {
        letterGrade = "C+";
    }
    else if (total >= 74) {
        letterGrade = "C";
    }
    else if (total >= 70) {
        letterGrade = "C-";
    }
    else if (total >= 67) {
        letterGrade = "D+";
    }
    else if (total >= 64) {
        letterGrade = "D";
    }
    else if (total >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //Display the final grade after the final grade is calcurated
    document.getElementById("final").style.display = "block";
    var result = String(letterGrade) + " (" + String(total.toFixed(2)) + "%)";
    document.getElementById("letterGrade").innerHTML = result;

});