/**
 *
 * Grade calculator
 */

function grade(marks) {
  let gradePoint;
  let letterGrade;

  if (marks >= 0 && marks <= 32) {
    gradePoint = 0;
    letterGrade = "F";
  } else if (marks >= 33 && marks <= 40) {
    gradePoint = 1;
    letterGrade = "D";
  } else if (marks >= 40 && marks <= 50) {
    gradePoint = 2;
    letterGrade = "C";
  } else if (marks >= 50 && marks <= 60) {
    gradePoint = 3;
    letterGrade = "B";
  } else if (marks >= 60 && marks <= 70) {
    gradePoint = 3.5;
    letterGrade = "A-";
  } else if (marks >= 70 && marks <= 80) {
    gradePoint = 4;
    letterGrade = "A";
  } else if (marks >= 80 && marks <= 100) {
    gradePoint = 5;
    letterGrade = "A+";
  }

  return { gradePoint, letterGrade };
}

/**
 * gpa Calculator
 */

let gpa = (bangla, english, science, religion, accounting, arabic) => {
  let totalGpa = bangla + english + science + religion + accounting + arabic;

  let gpa = totalGpa / 6;

  if (
    bangla == 0 ||
    english == 0 ||
    religion == 0 ||
    accounting == 0 ||
    science == 0 ||
    arabic == 0
  ) {
    return "F";
  } else {
    return gpa.toFixed(2);
  }
};
