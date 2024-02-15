const getDonor = (bloodGroup) => {
  let finalDonor = bloodDonor.sort(
    (a, b) => a.lastDateOfGivingBlood - b.lastDateOfGivingBlood
  );
  finalDonor.map((item) => {
    let targetDate = item.lastDateOfGivingBlood; //new Date("2002-06-09");
    let today = new Date();
    let differenceInMilliseconds = today - targetDate;
    let differenceInDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    if (item.bloodGroup === bloodGroup && differenceInDays >= 120) {
      console.log(`${item.name} is Able to Donate Blood ✅`);
    }
    if (
      item.bloodGroup === bloodGroup &&
      differenceInDays >= 110 &&
      differenceInDays <= 120
    ) {
      console.log(
        `${item.name} is not able to donate blood. he have to wait ${
          120 - differenceInDays
        } days More...❌`
      );
    }
  });
  if (
    bloodGroup !== "A+" &&
    bloodGroup !== "B+" &&
    bloodGroup !== "O+" &&
    bloodGroup !== "AB+" &&
    bloodGroup !== "A-" &&
    bloodGroup !== "B-" &&
    bloodGroup !== "O-" &&
    bloodGroup !== "AB-"
  ) {
    console.log(`Sorry ${bloodGroup} Is not available`);
  }
};
