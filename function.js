/**
 *
 * gpa calculator
 */

function gpa(marks, quota = false) {
  let gpa;

  if (marks >= 0 && marks < 20) {
    gpa = 0;
  } else if (marks >= 20 && marks <= 32 && quota == false) {
    gpa = 0;
  } else if (marks >= 20 && marks <= 32 && quota) {
    gpa = 1;
  } else if (marks >= 33 && marks <= 40) {
    gpa = 1;
  } else if (marks >= 40 && marks <= 50) {
    gpa = 2;
  } else if (marks >= 50 && marks <= 60) {
    gpa = 3;
  } else if (marks >= 60 && marks <= 70) {
    gpa = 3.5;
  } else if (marks >= 70 && marks <= 80) {
    gpa = 4;
  } else if (marks >= 80 && marks <= 100) {
    gpa = 5;
  }

  return gpa;
}

/**
 *
 * GRADE CALCULATION
 */

function grade(marks, quota = false) {
  let grade;

  if (marks >= 0 && marks < 20) {
    grade = "F";
  } else if (marks >= 20 && marks <= 32 && quota == false) {
    grade = "F";
  } else if (marks >= 20 && marks <= 32 && quota) {
    grade = "D";
  } else if (marks >= 33 && marks < 40) {
    grade = "D";
  } else if (marks >= 40 && marks < 50) {
    grade = "C";
  } else if (marks >= 50 && marks < 60) {
    grade = "B";
  } else if (marks >= 60 && marks < 70) {
    grade = "A-";
  } else if (marks >= 70 && marks < 80) {
    grade = "A";
  } else if (marks >= 80 && marks <= 100) {
    grade = "A+";
  }

  return grade;
}

/**
 * cgpa
 */

let cgpa = (bn, en, math, s, ss, rel) => {
  let total_gpa = bn + en + math + s + ss + rel;

  let cgpa = total_gpa / 6;

  if (bn == 0 || en == 0 || s == 0 || ss == 0 || math == 0 || rel == 0) {
    return "Fail. Soo Sad 😜";
  } else {
    return `${cgpa.toFixed(2)} CGPA & Your grade is = ${totalgrade(cgpa)}`;
  }
};

/**
 * grade
 */

function totalgrade(cgpa) {
  if (cgpa >= 0 && cgpa < 1) {
    return `F`;
  } else if (cgpa >= 1 && cgpa < 2) {
    return `D`;
  } else if (cgpa >= 2 && cgpa < 3) {
    return `C`;
  } else if (cgpa >= 3 && cgpa < 3.5) {
    return `B`;
  } else if (cgpa >= 3.5 && cgpa < 4) {
    return `A-`;
  } else if (cgpa >= 4 && cgpa < 5) {
    return `A`;
  } else if (cgpa == 5) {
    return `A+`;
  }
}

/**
 * Alert Function
 */

const setAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
};

/**
 * Email Check
 */

const emailcheck = (email) => {
  let pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{1,4}$/;
  return pattern.test(email);
};

/**
 * Bangladeshi Cell Number Check
 */

const cellcheck = (cell) => {
  let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
  return pattern.test(cell);
};

/**
 * Area Calculator
 */

const areaCal = (type, val1, val2 = "") => {
  if (type == "Rectangle") {
    return setAlert(`The area of a Rectangle is ${val1 * val2}`, "success");
  } else if (type == "Squre") {
    return setAlert(`The area of a Squre is ${val1 * val1}`, "success");
  } else if (type == "Triangle") {
    return setAlert(
      `The area of a Triangle is ${0.5 * val1 * val2}`,
      "success"
    );
  } else if (type == "Circle") {
    //let Radius = val1 * val1
    return setAlert(
      `The area of a Circle is ${3.141592654 * val1 * val1}`,
      "success"
    );
  }
};

/**
 *
 * @param {*} weight
 * @param {*} feet
 * @param {*} inches
 * @returns bmi
 */

function calculateBMI(weight, feet, inches) {
  // Convert height to centimeters
  const heightInCm = (feet * 12 + inches) * 2.54;

  // Convert height from centimeters to meters
  const heightInMeters = heightInCm / 100;

  // Calculate BMI
  const bmi = weight / (heightInMeters * heightInMeters);

  return bmi.toFixed(2);
}

/**
 * ? BMI Calculator
 * *Under 18.5 - you are very underweight and possibly malnourished
 * !18.5 to 24.9 - you have a healthy weight range for young and middle-aged adults
 * *25.0 to 29.9 - you are over weight.
 * !Over 30 - you are obese
 */

function bmiCheck(bmi) {
  if (bmi >= 0 && bmi < 18.5) {
    return `you are very underweight and possibly malnourished`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `you have a healthy weight range for young and middle-aged adults`;
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return `you are over weight`;
  } else {
    return `you are obese`;
  }
}
