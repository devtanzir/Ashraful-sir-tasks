/**
 * get data ls
 * @param {*} key
 */
const getDataLs = (key) => {
  const data = localStorage.getItem(key);

  if (!data) false;

  return JSON.parse(data);
};

/**
 * Save Data ls
 * @param {*} key
 * @param {*} data
 */
const sendDataLs = (key, data) => {
  const stdData = localStorage.getItem(key);

  let lsData;
  if (stdData) {
    lsData = JSON.parse(stdData);
  } else {
    lsData = [];
  }

  lsData.push(data);
  localStorage.setItem(key, JSON.stringify(lsData));
};

const sendBioToLs = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Show Single Student From ls
 * @param {*} key
 * @param {*} id
 * @returns
 */

const getSingleData = (key, id) => {
  const data = JSON.parse(localStorage.getItem(key));

  if (data) {
    return data.find((data) => data.id == id);
  } else {
    return false;
  }
};

/**
 *
 * @param {*} key
 * @param {*} id
 * @returns
 */
const deleteSingleUser = (key, id) => {
  const data = JSON.parse(localStorage.getItem(key));

  if (data) {
    const updatedData = data.filter((data) => data.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedData));
  } else {
    return false;
  }
};
