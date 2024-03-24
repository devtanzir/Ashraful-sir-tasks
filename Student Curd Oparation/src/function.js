/**
 * Custom Alert Created
 * @param {*} msg
 * @param {*} type
 * @returns
 */

const setAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
};

/**
 * All types of email verified
 * @param {*} email
 * @returns
 */

const emailCheck = (email) => {
  let pattern = /^[a-z_0-9\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,8}$/;
  return pattern.test(email);
};

/**
 * Bangladeshi Cell Number Check
 * @param {*} cell
 * @returns
 */

const cellCheck = (cell) => {
  let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
  return pattern.test(cell);
};

/**
 * id generator
 * @returns
 */

const createId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const machineId = "xxxxxxxxxxxx".replace(/[x]/g, function () {
    return ((Math.random() * 16) | 0).toString(16);
  });
  const processId = (Math.floor(Math.random() * 1000) % 1000)
    .toString(16)
    .padStart(3, "0");
  const counter = ((Math.random() * 16777216) | 0)
    .toString(16)
    .padStart(6, "0");

  return timestamp + machineId + processId + counter;
};

/**
 * get time ago
 * @param {*} postDate
 * @returns
 */

function formatPostTime(postDate) {
  const currentDate = new Date();
  const diff = currentDate - postDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    return postDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } else if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return "Yesterday";
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
}
