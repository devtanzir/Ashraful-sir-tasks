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

/**
 *? BMI Calculator
 */

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

/**
 *? Area Calculator
 */

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
