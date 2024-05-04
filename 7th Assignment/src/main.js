const msg = document.querySelector(".msg");
const userForm = document.getElementById("user-form");
const UserPostAllData = document.getElementById("UserPostAllData");
const userUpdateForm = document.getElementById("user-update-form");
const bioSection = document.querySelector(".bio-section");
const addBio = document.getElementById("addBio");
const showBio = document.getElementById("show-bio");

const getBioFromLs = () => {
  const bio = getDataLs("bio");
  if (bio) {
    showBio.innerText = bio;
    addBio.innerHTML = "Edit Bio";
    showBio.style.marginBottom = "12px";
  } else {
    showBio.innerText = bio;
    addBio.innerHTML = "Add Bio";
    showBio.style.marginBottom = "0";
  }
  return bio;
};
// Get the URL of the current page
const currentUrl = window.location.href;
const fileName = currentUrl.split("/").pop();

const handleBio = () => {
  addBio.style.display = "none";
  showBio.style.display = "none";
  bioSection.insertAdjacentHTML(
    "beforeend",
    `<div class="bio-inner">
        <textarea oninput=characterCounter(event) maxlength="101" name="bio-input" id="bio-input" placeholder="Describe Who You Are">${
          getBioFromLs() ? getBioFromLs() : ""
        }</textarea>
        <span class="character-counter"></span>
        <div class="buttons-status">
            <div class="bio-status">
                <span class="status-icon"></span>
                <p>Public</p>
            </div>
            <div class="submit-buttons">
                <button onclick=handleBioCancel(event)>Cancel</button>
                <button class="bio-save-btn" onclick=handleBioSave(event)>Save</button>
            </div>
        </div>
    </div>
     `
  );
  document.getElementById("bio-input").focus();
  verifyInput();
};
const verifyInput = () => {
  const textarea = document.getElementById("bio-input").value;
  const bioSaveBtn = document.querySelector(".bio-save-btn");
  const bio = getDataLs("bio");
  if (textarea === bio) {
    bioSaveBtn.disabled = true;
    bioSaveBtn.classList.add("not-allowed");
  } else {
    bioSaveBtn.disabled = false;
    bioSaveBtn.classList.remove("not-allowed");
  }
};

const characterCounter = (e) => {
  const textarea = document.getElementById("bio-input");
  const chrCounter = document.querySelector(".character-counter");
  const maxValue = textarea.getAttribute("maxlength");
  const currLength = textarea.value.length;
  const remaining = maxValue - currLength;
  chrCounter.innerHTML = `${remaining} characters remaining`;
  verifyInput();
  return remaining;
};
const handleBioCancel = (e) => {
  const bioInner = document.querySelector(".bio-inner");
  bioInner.remove();
  addBio.style.display = "block";
  showBio.style.display = "block";
};
const handleBioSave = (e) => {
  const bioInner = document.querySelector(".bio-inner");
  // Get the value of the textarea
  const textareaValue = document.getElementById("bio-input").value;

  sendBioToLs("bio", textareaValue);
  bioInner.remove();
  addBio.style.display = "block";
  showBio.style.display = "block";
  getBioFromLs();
};
const handleNavbarActive = (e) => {
  if (e.srcElement.nodeName == "LI") {
    const linksItem = document.getElementById("all-menu-links");
    const menuItems = linksItem.children;

    // Remove "active" class from all menu items
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }

    e.target.classList.add("active");
    handleNavbar();
  }

  return false;
};

const handleNavbar = () => {
  const homeIcon = document.getElementById("home-icon");
  const friendsIcon = document.getElementById("friends-icon");
  const marketplace = document.getElementById("marketplace");
  const groups = document.getElementById("groups");
  if (homeIcon.parentElement.classList.contains("active")) {
    homeIcon.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color: var(--primary-button-background);"><path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path></svg>`;
  } else {
    homeIcon.innerHTML = ` 
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color: var(--secondary-icon);"><path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path></svg>`;
  }
  if (friendsIcon.parentElement.classList.contains("active")) {
    friendsIcon.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color: var(--primary-button-background);"><path d="M8 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM17.5 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM5.25 13A4.75 4.75 0 0 0 .5 17.75 3.25 3.25 0 0 0 3.75 21h8.5a3.25 3.25 0 0 0 3.25-3.25A4.75 4.75 0 0 0 10.75 13h-5.5zm12.394 1.5a1 1 0 0 0-.95 1.31c.198.61.306 1.261.306 1.94 0 .661-.135 1.289-.377 1.858a1 1 0 0 0 .92 1.392H20.7a2.8 2.8 0 0 0 2.8-2.8 3.7 3.7 0 0 0-3.7-3.7h-2.156z"></path></svg>`;
  } else {
    friendsIcon.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color:var(--secondary-icon)"><path d="M8 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-.25 6A4.75 4.75 0 0 0 .5 17.75 3.25 3.25 0 0 0 3.75 21h8.5a3.25 3.25 0 0 0 3.25-3.25A4.75 4.75 0 0 0 10.75 13h-5.5zM2.5 17.75A2.75 2.75 0 0 1 5.25 15h5.5a2.75 2.75 0 0 1 2.75 2.75c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM14 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM17.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6.5a1 1 0 1 0 0 2h2.3a1.7 1.7 0 0 1 1.7 1.7.8.8 0 0 1-.8.8h-3.2a1 1 0 1 0 0 2h3.2a2.8 2.8 0 0 0 2.8-2.8 3.7 3.7 0 0 0-3.7-3.7h-2.3z"></path></svg>`;
  }
  if (marketplace.parentElement.classList.contains("active")) {
    marketplace.innerHTML = `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color: var(--primary-button-background);"><path d="M4.581 1c-1.38 0-2.597.905-2.993 2.227l-.816 2.72A6.45 6.45 0 0 0 .5 7.8c0 1.425.573 2.716 1.501 3.655L2 11.5v4.57c0 1.355 0 2.471.119 3.355.124.928.396 1.747 1.053 2.403.656.657 1.475.928 2.403 1.053.884.12 2 .119 3.354.119h6.142c1.354 0 2.47 0 3.354-.119.928-.125 1.747-.396 2.403-1.053.657-.656.928-1.475 1.053-2.403.12-.884.119-2 .119-3.354V11.5l-.001-.045A5.183 5.183 0 0 0 23.5 7.8a6.47 6.47 0 0 0-.272-1.854l-.816-2.719A3.125 3.125 0 0 0 19.42 1H4.58zM20 12.716V16c0 1.442-.002 2.424-.1 3.159-.096.706-.263 1.033-.486 1.255-.222.223-.55.39-1.255.485-.551.074-1.24.094-2.159.1V17.5a2.5 2.5 0 0 0-2.5-2.5h-3A2.5 2.5 0 0 0 8 17.5v3.498c-.918-.005-1.608-.025-2.159-.099-.706-.095-1.033-.262-1.255-.485-.223-.222-.39-.55-.485-1.255C4.002 18.424 4 17.443 4 16v-3.284A5.192 5.192 0 0 0 5.7 13a5.18 5.18 0 0 0 3.15-1.062A5.18 5.18 0 0 0 12 13a5.18 5.18 0 0 0 3.15-1.062A5.18 5.18 0 0 0 18.3 13a5.2 5.2 0 0 0 1.7-.284zM14 21h-4v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V21z"></path></svg>`;
  } else {
    marketplace.innerHTML = `
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color:var(--secondary-icon)"><path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path></svg>`;
  }
  if (groups.parentElement.classList.contains("active")) {
    groups.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color: var(--primary-button-background);"><path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path><path d="M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5 23.5 5.649 23.5 12 18.351 23.5 12 23.5zM3.373 8.017a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517z"></path></svg>`;
  } else {
    groups.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style="--color:var(--secondary-icon)"><path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path></svg>`;
  }
  return false;
};
handleNavbar();

const handleUserMenu = () => {
  const dropdownController = document.getElementById("dropdownController");
  dropdownController.classList.toggle("activeUserMenu");
};

const handleShowMore = (e) => {
  const fbSidebar = document.querySelector(".fb-home-body-sidebar");
  fbSidebar.classList.toggle("showNow");
  const seeMoreLess = document.getElementById("see-less");

  if (seeMoreLess.innerHTML === "See more") {
    return (seeMoreLess.innerHTML = "See less");
  }
  if (seeMoreLess.innerHTML === "See less") {
    return (seeMoreLess.innerHTML = "See more");
  }
};

/**
 * Get All Users
 */

const getAllUsers = () => {
  const users = getDataLs("users");

  let dataList = "";

  if (!users) {
    return (UserPostAllData.innerHTML = `<div class="card w-100">
              <div class="card-header bg-light">
                <h5 class="card-title fw-bold text-bg-light">Documentation</h5>
              </div>
              <div class="card-body">
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">1. How to Upload A post</h6>
                  <p class="card-text text-capitalize"> click the button "what's on your mind" that will give you a fill the from and Click the add now button.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">2. How to Add a Photo on your Post</h6>
                  <p class="card-text text-capitalize"> pick any type of photo link from any website, then put the link on the last input field.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">3. How to Set a Status</h6>
                  <p class="card-text text-capitalize"> your default status will be public. if you change the status you need to select the radio field then your status will be changed.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">4. How to Set a Avatar</h6>
                  <p class="card-text text-capitalize"> pick any type of photo link from any website, then put the link on the avatar input field.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">4. How to Upload Youtube Video</h6>
                  <p class="card-text text-capitalize">for Upload Video from youtube. you need the id of any video. this is original youtube video link "https://www.youtube.com/watch?v=<span class="bg-warning">_EjeWOLddgs</span>". look the yellow marked field there has an id. you need to to copy the id paste it on the last input fields</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">4. How to Upload Facebook Video</h6>
                  <p class="card-text text-capitalize">for Upload Video from facebook. you need the id of any video. this is original facebook video link "https://www.facebook.com/watch?v=<span class="bg-info">297769083126611</span>". look the yellow marked field there has an id. you need to to copy the id paste it on the last input fields</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">5. How to Update a Post</h6>
                  <p class="card-text text-capitalize">for update a post you need to click the <i class="fa-regular fa-pen-to-square"></i> icon. it will give you a form, then re fill the form and submit it.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">6. How to delete a Post</h6>
                  <p class="card-text text-capitalize">for update a post you need to click the <i class="fa-regular fa-trash-can"></i> icon. it will give you a confirm alert. if you click ok your post will be deleted. if you click cancel then your post still in same position.</p>
                </div>
                  <div class="content-box mb-3">
                    <h6 class="fw-bold ">7. How to Comment on a Post</h6>
                    <p class="card-text text-capitalize">just click on the comment input then write a comment and submit that </p>
                  </div>
                  <div class="content-box mb-3">
                    <h6 class="fw-bold ">8. How to reply on a Comment</h6>
                    <p class="card-text text-capitalize">just click on the reply button then write comment and press enter</p>
                  </div>
              </div>
            </div>`);
  }
  if (users.length == 0) {
    return (UserPostAllData.innerHTML = `<div class="card w-100">
              <div class="card-header bg-light">
                <h5 class="card-title fw-bold text-bg-light">Documentation</h5>
              </div>
              <div class="card-body">
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">1. How to Upload A post</h6>
                  <p class="card-text text-capitalize"> click the button "what's on your mind" that will give you a fill the from and Click the add now button.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">2. How to Add a Photo on your Post</h6>
                  <p class="card-text text-capitalize"> pick any type of photo link from any website, then put the link on the last input field.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">3. How to Set a Status</h6>
                  <p class="card-text text-capitalize"> your default status will be public. if you change the status you need to select the radio field then your status will be changed.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">4. How to Set a Avatar</h6>
                  <p class="card-text text-capitalize"> pick any type of photo link from any website, then put the link on the avatar input field.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">4. How to Upload Youtube Video</h6>
                  <p class="card-text text-capitalize">for Upload Video from youtube. you need the id of any video. this is original youtube video link "https://www.youtube.com/watch?v=<span class="bg-warning">_EjeWOLddgs</span>". look the yellow marked field there has an id. you need to to copy the id paste it on the last input fields</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">4. How to Upload Facebook Video</h6>
                  <p class="card-text text-capitalize">for Upload Video from facebook. you need the id of any video. this is original facebook video link "https://www.facebook.com/watch?v=<span class="bg-info">297769083126611</span>". look the yellow marked field there has an id. you need to to copy the id paste it on the last input fields</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">5. How to Update a Post</h6>
                  <p class="card-text text-capitalize">for update a post you need to click the <i class="fa-regular fa-pen-to-square"></i> icon. it will give you a form, then re fill the form and submit it.</p>
                </div>
                <div class="content-box mb-3">
                  <h6 class="fw-bold ">6. How to delete a Post</h6>
                  <p class="card-text text-capitalize">for update a post you need to click the <i class="fa-regular fa-trash-can"></i> icon. it will give you a confirm alert. if you click ok your post will be deleted. if you click cancel then your post still in same position.</p>
                </div>
                  <div class="content-box mb-3">
                    <h6 class="fw-bold ">7. How to Comment on a Post</h6>
                    <p class="card-text text-capitalize">just click on the comment input then write a comment and submit that </p>
                  </div>
                  <div class="content-box mb-3">
                    <h6 class="fw-bold ">8. How to reply on a Comment</h6>
                    <p class="card-text text-capitalize">just click on the reply button then write comment and press enter</p>
                  </div>
                
              </div>
            </div>`);
  }

  if (users) {
    users.reverse().forEach((item) => {
      dataList += `
              <div class="user-post">
            
              <div class="user-post-header">
                <div class="post-info">
                  <img src="${item.avatar}" alt="${item.name}" />
                  <div class="user-details">
                    <a class="author" href="#">${item.name}</a>
                    <span
                      >${formatPostTime(item.createdAt)} - 
                      ${postStatusIcon(item.status)}
                     
                      </span>
                  </div>
                </div>
                <div class="post-menu">
               <i onclick="editSingleUser('${
                 item.id
               }')" href="#exampleModal2" data-bs-toggle="modal" class="fa-regular fa-pen-to-square"></i>
                <i onclick=deleteUser("${
                  item.id
                }") class="fa-regular fa-trash-can"></i>
                </div>
              </div>

              ${findContent(item.content)}

              ${filterLinks(item.link)}

              <div class="post-comments">
                <div class="comments-header">
                  <div class="reaction">
                    <div class="reaction-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 16 16"
                            >
                              <defs>
                                <linearGradient
                                  id="a"
                                  x1="50%"
                                  x2="50%"
                                  y1="0%"
                                  y2="100%"
                                >
                                  <stop offset="0%" stop-color="#FF6680" />
                                  <stop offset="100%" stop-color="#E61739" />
                                </linearGradient>
                                <filter
                                  id="c"
                                  width="118.8%"
                                  height="118.8%"
                                  x="-9.4%"
                                  y="-9.4%"
                                  filterUnits="objectBoundingBox"
                                >
                                  <feGaussianBlur
                                    in="SourceAlpha"
                                    result="shadowBlurInner1"
                                    stdDeviation="1"
                                  />
                                  <feOffset
                                    dy="-1"
                                    in="shadowBlurInner1"
                                    result="shadowOffsetInner1"
                                  />
                                  <feComposite
                                    in="shadowOffsetInner1"
                                    in2="SourceAlpha"
                                    k2="-1"
                                    k3="1"
                                    operator="arithmetic"
                                    result="shadowInnerInner1"
                                  />
                                  <feColorMatrix
                                    in="shadowInnerInner1"
                                    values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"
                                  />
                                </filter>
                                <path id="b" d="M8 0a8 8 0 100 16A8 8 0 008 0z" />
                              </defs>
                              <g fill="none">
                                <use fill="url(#a)" xlink:href="#b" />
                                <use
                                  fill="black"
                                  filter="url(#c)"
                                  xlink:href="#b"
                                />
                                <path
                                  fill="white"
                                  d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"
                                />
                              </g>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="#">Elon Musk, Ratan Tata and 550 others</a>
                  </div>
                  <div class="counts">
                    <a href="#">${item.comments.length} comments</a>
                  </div>
                </div>
                <div class="divider-0"></div>
                <div class="comments-menu">
                  <ul>
                    <li>
                      <span class="comment-icon"></span>
                      <span>Like</span>
                    </li>
  
                    <li>
                      <span class="comment-icon"></span>
                      <span>Comment</span>
                    </li>
  
                    <li>
                      <span class="comment-icon"></span>
                      <span>Share</span>
                    </li>
                  </ul>
                </div>
                <div class="divider-0"></div>
                <div class="comments-area">
                ${findComments(item.comments, item.id)}
               
                <div class="comment-input">
                    <img src="https://www.svgrepo.com/download/192244/man-user.svg" alt="">
                    <div class="input-box">
                    <form id="comment-Submit" onsubmit=commentSubmitForm(event,"${
                      item.id
                    }")>
                      <input onfocus=handleFocus(event) name="topComment" type="text" placeholder="Write a Comment...">
                    </form>
                    <div class="comments-icons">
                    <div>
                      <ul>
                        <li> 
                          <a href="#">
                          <div class="comment-bottom-icon"></div>
                        </a>
                      </li>
                        <li> 
                          <a href="#">
                          <div class="comment-bottom-icon"></div>
                        </a>
                      </li>
                        <li> 
                          <a href="#">
                          <div class="comment-bottom-icon"></div>
                        </a>
                      </li>
                        <li> 
                          <a href="#">
                          <div class="comment-bottom-icon"></div>
                        </a>
                      </li>
                        <li> 
                          <a href="#">
                          <div class="comment-bottom-icon"></div>
                        </a>
                      </li>
                      </ul>
                      </div>
                      <div onclick=handleComment(event,"${
                        item.id
                      }") class="submit-icon"></div>
                    </div>
                    </div>
                    
                  </div>
              </div>
              </div>
            </div>
            
            `;
    });
    UserPostAllData.innerHTML = dataList;
  }
};
if (fileName == "index.html" || fileName == "profile.html" || fileName == "") {
  getAllUsers();
}
if (fileName == "profile.html") {
  getBioFromLs();
}
// Edit Users

const editSingleUser = (id) => {
  const { name, avatar, status, link, content } = getSingleData("users", id);
  userUpdateForm.innerHTML = `            
                 <div class="my-3">
                <label for="name">name</label>
                <input id="name" name="name" value="${name}" type="text" class="form-control" />
              </div>
              <div class="my-3">
                <label for="avatar">avatar</label>
                <input  value="${avatar}" id="avatar" name="avatar" type="text" class="form-control" />
              </div>
              <div class="my-3"> <h4>Post Status</h4>
                <input type="radio" id="data1" name="status" ${
                  status == "public" ? "checked" : ""
                } value="public">
                <label for="data1">Public</label><br>
                <input type="radio" id="data2" name="status" ${
                  status == "friends" ? "checked" : ""
                }   value="friends">
                <label for="data2">Friends Only</label><br>
                <input type="radio" id="data3" name="status" ${
                  status == "privet" ? "checked" : ""
                }  value="privet">
                <label for="data3">Only Me</label><br>
              </div>
              <div class="my-3">
                <label for="content">content</label>
                <textarea class="form-control" name="content" id="content" cols="30" rows="5">${content}</textarea>
             
              </div>
              <div class="my-3">
                <label for="postPhoto">Photo Links | Video Id</label>
                <input  value="${link}" id="postPhoto" name="link" type="text" class="form-control" />
              </div>
              <div class="my-3">
                <input
                  type="submit"
                  class="btn btn-primary w-100"
                  value="Add Now"
                />
              </div>`;

  userUpdateForm.onsubmit = (e) => {
    e.preventDefault();
    const modalClose = document.getElementById("editModalClose");
    // get form data from formData object
    let formData = new FormData(e.target);
    // let studentData = Object.fromEntries(formData.entries());
    let { name, avatar, status, link, content } = Object.fromEntries(
      formData.entries()
    );
    // form validation
    if (!name || !avatar) {
      return (msg.innerHTML = setAlert("Invalid Credentials"));
    } else if (content || link) {
      const allData = getDataLs("users");
      const updatedData = {
        name,
        avatar,
        status,
        link,
        content,
      };

      const updatedIndex = allData.findIndex((item) => item.id === id);

      allData[updatedIndex] = {
        ...allData[updatedIndex],
        ...updatedData,
      };

      localStorage.setItem("users", JSON.stringify(allData));

      msg.innerHTML = setAlert("Data Updated", "success");
      e.target.reset();
      modalClose.click();
      getAllUsers();
    } else {
      return (msg.innerHTML = setAlert("Invalid Credentials"));
    }
  };
};

const deleteUser = (id) => {
  const conf = confirm("are you sure");
  if (conf) {
    deleteSingleUser("users", id);
    getAllUsers();
  }
};

const commentSubmitForm = (event, id) => {
  event.preventDefault();
  // get form data from formData object

  let formData = new FormData(event.target);

  let { topComment } = Object.fromEntries(formData.entries());

  if (!topComment) {
    return false;
  } else {
    const allData = getDataLs("users");
    const updatedData = {
      id: createId(),
      author: "Tanzir Ibne Ali",
      photo: "https://www.svgrepo.com/download/192244/man-user.svg",
      content: topComment,
      nestedComment: [],
      createdAt: Date.now(),
    };
    const updatedIndex = allData.findIndex((item) => item.id === id);
    allData[updatedIndex] = {
      ...allData[updatedIndex],
      ...allData[updatedIndex].comments.push(updatedData),
    };
    localStorage.setItem("users", JSON.stringify(allData));
    event.target.reset();
    getAllUsers();
  }
};

const handleComment = (event, id) => {
  const commentSubmit = event.target.parentElement.parentElement.children[0];
  let formData = new FormData(commentSubmit);

  let { topComment } = Object.fromEntries(formData.entries());
  if (!topComment) {
    return false;
  } else {
    const allData = getDataLs("users");
    const updatedData = {
      id: createId(),
      author: "Tanzir Ibne Ali",
      photo: "https://www.svgrepo.com/download/192244/man-user.svg",
      content: topComment,
      nestedComment: [],
      createdAt: Date.now(),
    };
    const updatedIndex = allData.findIndex((item) => item.id === id);
    allData[updatedIndex] = {
      ...allData[updatedIndex],
      ...allData[updatedIndex].comments.push(updatedData),
    };
    localStorage.setItem("users", JSON.stringify(allData));
    commentSubmit.reset();
    getAllUsers();
  }
};

const handleFocus = (e) => {
  e.target.parentElement.parentElement.parentElement.classList.add("active");
};

const handleReplyClick = (e, id) => {
  e.target.parentElement.parentElement.parentElement.classList.add(
    "replyIsActive"
  );
};
const replySubmitForm = (event, id, commentedId) => {
  event.preventDefault();

  let formData = new FormData(event.target);

  let { reply } = Object.fromEntries(formData.entries());

  if (!reply) {
    return false;
  } else {
    const allData = getDataLs("users");
    const updatedData = {
      id: createId(),
      author: "Developer Robiul",
      photo:
        "https://robiulibneali.com/wp-content/uploads/2023/06/IMG_20210210_225451_686-scaled.jpg",
      content: reply,
      createdAt: Date.now(),
    };

    const updatedIndex = allData.findIndex((item) => item.id === commentedId);
    const updatedComment = allData[updatedIndex].comments.findIndex(
      (item) => item.id === id
    );

    allData[updatedIndex].comments[updatedComment] = {
      ...allData[updatedIndex].comments[updatedComment],
      ...allData[updatedIndex].comments[updatedComment].nestedComment.push(
        updatedData
      ),
    };

    localStorage.setItem("users", JSON.stringify(allData));
    event.target.reset();
    event.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
      "replyIsActive"
    );

    getAllUsers();
  }
};
const handleNested = (event, id, commentedId) => {
  const replySubmit = event.target.parentElement.parentElement.children[0];
  let formData = new FormData(replySubmit);

  let { reply } = Object.fromEntries(formData.entries());

  if (!reply) {
    return false;
  } else {
    const allData = getDataLs("users");
    const updatedData = {
      id: createId(),
      author: "Developer Robiul",
      photo:
        "https://robiulibneali.com/wp-content/uploads/2023/06/IMG_20210210_225451_686-scaled.jpg",
      content: reply,
      createdAt: Date.now(),
    };

    const updatedIndex = allData.findIndex((item) => item.id === commentedId);
    const updatedComment = allData[updatedIndex].comments.findIndex(
      (item) => item.id === id
    );

    allData[updatedIndex].comments[updatedComment] = {
      ...allData[updatedIndex].comments[updatedComment],
      ...allData[updatedIndex].comments[updatedComment].nestedComment.push(
        updatedData
      ),
    };

    localStorage.setItem("users", JSON.stringify(allData));
    replySubmit.reset();
    replySubmit.parentElement.parentElement.parentElement.parentElement.classList.remove(
      "replyIsActive"
    );

    getAllUsers();
  }
};
if (fileName == "index.html" || fileName == "profile.html" || fileName == "") {
  userForm.onsubmit = (e) => {
    e.preventDefault();
    const modalClose = document.getElementById("modalCloseBtn");

    // get form data from formData object

    let formData = new FormData(e.target);

    let { name, avatar, status, content, link } = Object.fromEntries(
      formData.entries()
    );

    // form validation

    if (!name || !avatar) {
      return (msg.innerHTML = setAlert("Invalid Credentials"));
    } else if (content || link) {
      sendDataLs("users", {
        id: createId(),
        name,
        content,
        status,
        link,
        avatar,
        comments: [],
        createdAt: Date.now(),
      });
      msg.innerHTML = setAlert("Data Stable", "success");
      e.target.reset();
      modalClose.click();
      getAllUsers();
    } else {
      return (msg.innerHTML = setAlert("Invalid Credentials"));
    }
  };
}
