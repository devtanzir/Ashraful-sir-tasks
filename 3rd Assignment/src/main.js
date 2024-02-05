const tbody = document.getElementById("tableBody");

studentName.map((item, index) => {
  let tableRow = ` <tr>
        <th scope="row">${index + 1}</th>
         <td>${item}</td>
         <td>${studentAge[index]}</td>
       <td>${studentRoll[index]}</td>
         <td>${studentReg[index]}</td>
        <td>${Bangla[index]} (${grade(Bangla[index])})</td>
         <td>${English[index]} (${grade(English[index])})</td>
         <td>${Arabic[index]} (${grade(Arabic[index])})</td>
         <td>${Science[index]} (${grade(Science[index])})</td>
        <td>${Relegion[index]} (${grade(Relegion[index])})</td>
         <td>${Math[index]} (${grade(Math[index])})</td>
         <td>${cgpa(
           gpa(Bangla[index]),
           gpa(English[index]),
           gpa(Arabic[index]),
           gpa(Science[index]),
           gpa(Relegion[index]),
           gpa(Math[index])
         )}</td>
        <td>${totalgrade(
          cgpa(
            gpa(Bangla[index]),
            gpa(English[index]),
            gpa(Arabic[index]),
            gpa(Science[index]),
            gpa(Relegion[index]),
            gpa(Math[index])
          )
        )}</td>
      </tr>`;

  tbody.innerHTML += tableRow;
});
