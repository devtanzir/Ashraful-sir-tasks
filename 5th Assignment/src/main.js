//* রোল এবং রেজিস্ট্রেসন অনুযায়ী স্টুডেন্ট ডাটা সাচ
//? প্রত্যেক স্টুডেন্টদের মার্কশিট ওইথ ফুল রেজাস্ট সিসটেম
//* জেন্ডার অনুযায়ী স্টুডেন্ট সাচ

let roll = +prompt(
  "IF YOU CANCEL THE PROMPT THEN YOU CAN GET THE MARKSHIT-- AVAILABLE VALU IS -- 1,2,3,4,5,6,7,8,9,10 --------------------------- Student Roll Number"
);
let reg = +prompt(
  "IF YOU CANCEL THE PROMPT THEN YOU CAN GET THE MARKSHIT-- AVAILABLE VALU IS -- 11,22,33,44,55,66,77,88,99,100 -- Student Registration Number"
);
let gender = prompt(
  "IF YOU CANCEL THE PROMPT THEN YOU CAN GET THE MARKSHIT-- AVAILABLE VALU IS -- Male Or Female"
);

let count = 0;
let passed = 0;

for (const key in students) {
  let getStudents = students[key];
  let totalGpa = gpa(
    grade(getStudents.allSub.Bangla).gradePoint,
    grade(getStudents.allSub.English).gradePoint,
    grade(getStudents.allSub.Science).gradePoint,
    grade(getStudents.allSub.Religion).gradePoint,
    grade(getStudents.allSub.Accounting).gradePoint,
    grade(getStudents.allSub.Arabic).gradePoint
  );
  let subject = getStudents.allSub;
  // getting all roles
  if (roll === getStudents.roll && reg === getStudents.reg && gender === null) {
    console.log(getStudents);
    break;
  }
  // checking the gender
  if (gender === getStudents.gender) {
    if (roll !== 0 && reg !== 0) {
      break;
    }
    console.log(getStudents);
  } else if (roll === 0 && reg === 0 && gender === null) {
    console.log(`

  MarkShit Of All Student's
  ___________________________

  Student Name : ${getStudents.name}
  
  Roll : ${getStudents.roll}  Reg : ${getStudents.reg}

  Gender : ${getStudents.gender}  Age : ${getStudents.age}

  Bangla : ${subject.Bangla} | Grade is ${grade(subject.Bangla).letterGrade}
  English : ${subject.English} | Grade is ${grade(subject.English).letterGrade}
  Science : ${subject.Science} | Grade is ${grade(subject.Science).letterGrade}
  Religion : ${subject.Religion} | Grade is ${
      grade(subject.Religion).letterGrade
    }
  Accounting : ${subject.Accounting} | Grade is ${
      grade(subject.Accounting).letterGrade
    }
  Arabic : ${subject.Arabic} | Grade is ${grade(subject.Arabic).letterGrade}

  Total GPA = ${totalGpa}
  `);
  } else {
    count++;
  }
  passed++;
}
if (passed == 10) {
  //? পাশের হার কেলকুলেসন

  let passed = 100 - (4 / 10) * 100;
  console.log(`${passed}% Students Are Passed`);
}
if (count == 10) console.log("Invalid Credentials");
