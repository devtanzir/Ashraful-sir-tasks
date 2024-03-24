const studentFrom = document.getElementById("student-form");
const studentList = document.getElementById("student-list");
const studentUpdateForm = document.getElementById("product-update-form");
const msg = document.querySelector(".msg");

const getAllStudents = () => {
  const students = getDataLs("students");

  let dataList = "";

  if (students) {
    students.reverse().forEach((item, index) => {
      dataList += `
            <tr>
                <td>${index + 1}</td>
                <td><img style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" src="${
                  item.photo
                }" alt=${item.name}></td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.mobile}</td>
                <td>${item.location}</td>
                <td>${formatPostTime(item.createdAt)}</td>
                <td>
                  <a onclick="showSingleStudent('${
                    item.id
                  }')" class="btn btn-info btn-sm product-viwe" href="#exampleModal2" data-bs-toggle="modal"><i class="fa-regular fa-eye"></i></a>
                  <a onclick="editSingleStudent('${
                    item.id
                  }')"  class="btn btn-warning btn-sm product-edit" href="#exampleModal3" data-bs-toggle="modal"><i class="fa-regular fa-pen-to-square"></i></a>
                  <a onclick="deleteStudent('${
                    item.id
                  }')" class="btn btn-danger btn-sm product-delete" href="#"><i class="fa-regular fa-trash-can"></i></a>
                </td>
              </tr>
            
            `;
    });
    studentList.innerHTML = dataList;
  } else {
    studentList.innerHTML = `
        <tr>
            <td colspan="8" class="text-danger text-center"> No data Found</td>
        </tr>        
        `;
  }
};
const showSingleStudent = (id) => {
  const singleData = document.querySelector(".single-data");
  const { name, location, photo } = getSingleData("students", id);

  singleData.innerHTML = `<img class="shadow mb-2" src="${photo}" alt="">
              <h1>${name}</h1>
              <p>${location}</p>`;
};
const editSingleStudent = (id) => {
  const { name, email, mobile, location, photo } = getSingleData(
    "students",
    id
  );
  studentUpdateForm.innerHTML = `            
    <div class="my-3">
                <label for="name">name</label>
                <input id="name" value="${name}" name="name" type="text" class="form-control" />
              </div>
              <div class="my-3">
                <label for="email">email</label>
                <input id="email" name="email" value="${email}" type="text" class="form-control" />
              </div>
              <div class="my-3">
                <label for="mobile">mobile</label>
                <input id="mobile" name="mobile" value="${mobile}" type="text" class="form-control" />
              </div>
              <div class="my-3">
                <label for="location">location</label>
                <input id="location" name="location" type="text" value="${location}" class="form-control" />
              </div>
              <div class="my-3">
                <img class="w-100" src="${photo}" alt="">
              </div>
              <div class="my-3">
                <label for="photo">photo</label>
                <input id="photo" value="${photo}" name="photo" type="text" class="form-control" />
              </div>
              <div class="my-3">
                <input
                  type="submit"
                  class="btn btn-primary w-100"
                  value="Add Now"
                />
              </div>`;

  studentUpdateForm.onsubmit = (e) => {
    e.preventDefault();
    const modalClose = document.getElementById("editModalClose");
    // get form data from formData object
    let formData = new FormData(e.target);
    // let studentData = Object.fromEntries(formData.entries());
    let { name, email, mobile, location, photo } = Object.fromEntries(
      formData.entries()
    );
    // form validation
    if (!name || !email || !mobile || !location || !photo) {
      return (msg.innerHTML = setAlert("All Fields are required"));
    } else if (!emailCheck(email)) {
      return (msg.innerHTML = setAlert("Invalid Email Address", "warning"));
    } else if (!cellCheck(mobile)) {
      return (msg.innerHTML = setAlert("Invalid Phone Number", "info"));
    } else {
      const allData = getDataLs("students");
      const updatedData = {
        name,
        email,
        photo,
        mobile,
        location,
      };

      const updatedIndex = allData.findIndex((item) => item.id === id);

      allData[updatedIndex] = {
        ...allData[updatedIndex],
        ...updatedData,
      };

      localStorage.setItem("students", JSON.stringify(allData));

      msg.innerHTML = setAlert("Data Updated", "success");
      e.target.reset();
      modalClose.click();
      getAllStudents();
    }
  };
};
const deleteStudent = (id) => {
  const conf = confirm("are you sure");
  if (conf) {
    deleteSingleStudent("students", id);
    getAllStudents();
  }
};
getAllStudents();
studentFrom.onsubmit = (e) => {
  e.preventDefault();
  const modalClose = document.getElementById("modalCloseBtn");

  // get form data from formData object

  let formData = new FormData(e.target);

  // let studentData = Object.fromEntries(formData.entries());
  let { name, email, mobile, location, photo } = Object.fromEntries(
    formData.entries()
  );

  // form validation

  if (!name || !email || !mobile || !location || !photo) {
    return (msg.innerHTML = setAlert("All Fields are required"));
  } else if (!emailCheck(email)) {
    return (msg.innerHTML = setAlert("Invalid Email Address", "warning"));
  } else if (!cellCheck(mobile)) {
    return (msg.innerHTML = setAlert("Invalid Phone Number", "info"));
  } else {
    sendDataLs("students", {
      id: createId(),
      name,
      email,
      mobile,
      location,
      photo,
      createdAt: Date.now(),
    });
    msg.innerHTML = setAlert("Data Stable", "success");
    e.target.reset();
    modalClose.click();
    getAllStudents();
  }
};
