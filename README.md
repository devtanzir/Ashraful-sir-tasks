
# 1st Assignment

In my 1st Assignment, I got 5 tasks. Now I'm Explain How I Finish my all tasks


## 1st tasks

এমন একটি কন্ডিসন তৈরি করুন যেখানে একজন ইউজার তার কিছু ডলার, পাউন্ড, ইওরো কে টাকাতে কনভার্ট করতে পারবে



How do I Solve It

```javascript
  /**
 *? Currency Converter
 */

//Get elements
const currency_form = document.getElementById("currency_form");

//form submit
currency_form.onsubmit = (e) => {
  e.preventDefault();

  const msg = document.querySelector(".msg");
  const details = document.querySelector(".details");

  //get values
  let amount = currency_form.querySelector('input[name="amount"]');
  let currency = currency_form.querySelector('select[name="currency"]');

  if (amount.value == "" || currency.value == "") {
    msg.innerHTML = setAlert("All Fields Are Required");
  } else {
    let rate = 0;

    switch (currency.value) {
      case "USD":
        rate = 109.77;
        break;
      case "CAD":
        rate = 81.39;
        break;
      case "Pound":
        rate = 138.9;
        break;
      case "Euro":
        rate = 119.34;
        break;
      case "Rupee":
        rate = 1.32;
        break;
    }

    let amount_final = Math.round(amount.value * rate);

    details.innerHTML = setAlert(
      `${amount.value} ${currency.value} = ${amount_final} BDT`,
      "success"
    );
  }
};
```


## Set Alert

For set Alert i use it from another function. the reference is


```javascript

/**
 * Alert Function
 */

const setAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
};

```
## Features

- Convert any Currency From BDT
- Easy To Use
- Giving Sweet Error


## Screenshots

![App Screenshot](https://github.com/devtanzir/Ashraful-sir-tasks/blob/main/images/currency.PNG)


## 2nd tasks

বিয়ের জন্য পাত্র খুজে বের করার কন্ডিসন লিখুন যেখানে পাত্রের বয়স মিনিমাম ৩০ , সেলারী ৫০ হাজার টাকা মিনিমাম এবং লম্বা ৬ ফিট হতে হবে অথবা সেলারী ২ লাখ হলে আর কিছুই লাগবে না , , , মেয়ে বিয়ের জন্য কবুল বলবে




How do I Solve It

```javascript
 
/**
 *? Shadi.com
 */

const shadiFrom = document.getElementById("shadi_form");

shadiFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const grmName = document.getElementById("grmName");
  const groomsAge = document.getElementById("groomsAge");
  const Salary = document.getElementById("Salary");
  const Height = document.getElementById("Height");
  const msgDetails = document.querySelector(".msg-details");

  if (
    (groomsAge.value >= 30 && Salary.value >= 50000 && Height.value >= 6) ||
    Salary.value >= 600000
  ) {
    msgDetails.innerHTML = setAlert(
      `Hey ${grmName.value} Too Many Brides are available For you 😜`,
      "success"
    );
  } else if (groomsAge.value < 30 || Salary.value < 50000 || Height.value < 6) {
    msgDetails.innerHTML = setAlert(
      `Sorry ${grmName.value}. No Bride Available on your requirement 🤐`
    );
  }
});

```



## Set Alert

For set Alert i use it from another function. the reference is


```javascript

/**
 * Alert Function
 */

const setAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
};

```
## Features

- Find Your Bride
- Easy To Use
- Giving Sweet Error



## Screenshots

![App Screenshot](https://github.com/devtanzir/Ashraful-sir-tasks/blob/main/images/marage.PNG)


## 3rd tasks

ইউজারের বডি ম্যক্সে ইন্ডেক্স (BMI) বের করার জন্য একটি লজিক লিখুন



How do I Solve It

```javascript

/**
 *? BMI Calculator
 */



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




const bmiFrom = document.getElementById("bmi_form");

bmiFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = Number(document.getElementById("Weight").value);
  const feet = Number(document.getElementById("feet").value);
  const inches = Number(document.getElementById("inches").value);
  const msgDetails = document.querySelector(".last-msg");

  const totalBmi = calculateBMI(weight, feet, inches);

  msgDetails.innerHTML = setAlert(
    `your bmi is ${totalBmi} & ${bmiCheck(totalBmi)} 😜`,
    "success"
  );
});


```

## Features

- Convert Your BMI correctly 
- Easy To Use
- Fit to meter auto convert


## Screenshots

![App Screenshot](https://github.com/devtanzir/Ashraful-sir-tasks/blob/main/images/bmi.PNG)


## 4th tasks

বর্গ ক্ষেত্র, আয়ত ক্ষেত্র, ত্রিভুজ, বৃত্তের ক্ষেত্রফল বের করার জন্য কন্ডিসন তৈরি করুন



How do I Solve It

```javascript

/**
 *? Area Calculator
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


{
  //get elements

  const rec = document.querySelector(".rec");
  const squ = document.querySelector(".squ");
  const tri = document.querySelector(".tri");
  const cir = document.querySelector(".cir");
  const details = document.querySelector(".details-msg");
  const area_type = document.getElementById("area_type");
  const area_form = document.getElementById("area_form");

  //cstm css

  rec.style.display = "none";
  squ.style.display = "none";
  tri.style.display = "none";
  cir.style.display = "none";

  // area  type value

  area_type.onchange = () => {
    if (area_type.value == "Rectangle") {
      rec.style.display = "block";
    } else {
      rec.style.display = "none";
    }

    if (area_type.value == "Squre") {
      squ.style.display = "block";
    } else {
      squ.style.display = "none";
    }

    if (area_type.value == "Triangle") {
      tri.style.display = "block";
    } else {
      tri.style.display = "none";
    }

    if (area_type.value == "Circle") {
      cir.style.display = "block";
    } else {
      cir.style.display = "none";
    }
  };

  // form submit

  area_form.onsubmit = (e) => {
    e.preventDefault();

    if (area_type.value == "Rectangle") {
      let length = area_form.querySelector(`input[name="length"]`).value;
      let width = area_form.querySelector(`input[name="width"]`).value;

      details.innerHTML = areaCal(area_type.value, length, width);
    } else if (area_type.value == "Squre") {
      let bahu = area_form.querySelector(`input[name="bahu"]`).value;
      details.innerHTML = areaCal(area_type.value, bahu);
    } else if (area_type.value == "Triangle") {
      let base = area_form.querySelector(`input[name="base"]`).value;
      let height = area_form.querySelector(`input[name="heigth"]`).value;
      details.innerHTML = areaCal(area_type.value, base, height);
    } else if (area_type.value == "Circle") {
      let radius = area_form.querySelector(`input[name="radius"]`).value;
      details.innerHTML = areaCal(area_type.value, radius);
    }
  };
}

```

## Features

- Convert Your Area correctly 
- Easy To Use
- All type Area Available


## Screenshots

![App Screenshot](https://github.com/devtanzir/Ashraful-sir-tasks/blob/main/images/area.PNG)


## 5th tasks

জিপিএ এবং গ্রেড বের করুন ক্লাশে দেখানো অনুযায়ী শুধু জেনারেল কোটা এর জন্য ৩৩ রাখুন এবং কোটার জন্য পাশ মার্ক ৩৩ এর বদলে ২০ রাখুন



How do I Solve It

```javascript
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
 *? Result Shit
 */

const resultFrom = document.getElementById("result_form");

resultFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const stdName = document.getElementById("stdName");
  const stdRoll = document.getElementById("stdRoll");
  const general = document.getElementById("general");
  const freedomFighter = document.getElementById("freedomFighter");
  const Bangla = document.getElementById("Bangla");
  const English = document.getElementById("English");
  const Math = document.getElementById("Math");
  const Science = document.getElementById("Science");
  const Social_Science = document.getElementById("Social_Science");
  const Religion = document.getElementById("Religion");
  const finalResult = document.querySelector(".final-msg");
  const spacial = freedomFighter.checked == true;

  if (general.checked == true) {
    finalResult.innerHTML = setAlert(
      ` Hey ${stdName.value} Your Roll is ${stdRoll.value} and Got ${cgpa(
        gpa(Bangla.value),
        gpa(English.value),
        gpa(Math.value),
        gpa(Science.value),
        gpa(Social_Science.value),
        gpa(Religion.value)
      )}`,
      "success"
    );
  }

  if (spacial) {
    finalResult.innerHTML = setAlert(
      `  Hey ${stdName.value} Your Roll is ${stdRoll.value} and Got ${cgpa(
        gpa(Bangla.value, spacial),
        gpa(English.value, spacial),
        gpa(Math.value, spacial),
        gpa(Science.value, spacial),
        gpa(Social_Science.value, spacial),
        gpa(Religion.value, spacial)
      )}`,
      "success"
    );
  }
});

```

## Features

- Get your academic result 
- Easy To Use
- Have a freedomFighter quota


## for general

![App Screenshot](https://github.com/devtanzir/Ashraful-sir-tasks/blob/main/images/result%20general%20quata.PNG)

## for freedomFighter

![App Screenshot](https://github.com/devtanzir/Ashraful-sir-tasks/blob/main/images/result%20ff%20quata.PNG)


# 2nd Assignment