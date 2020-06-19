const axios = require("axios");
//Callbacks
//You may have situations like this
function sendData1(sendToBrowser) {
  const data = {
    user: "dmstudent",
    pass: "imsupersmart",
    dob: {
      year: 1990,
      month: "january",
      date: 1,
    },
  };

  delete data.pass;

  // setTimeout(() => {
  sendToBrowser(data);
  // }, 5000);
}

function get(url) {
  return axios.get(url, {
    headers: {
      Authorization: "Bearer AXZVZFASFAWER@#$",
    },
  });
}

module.exports = {
  sendData1,
  get,
};
