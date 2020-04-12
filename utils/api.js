const axios = require("axios");
const api = {
  getUser(username) {
    try {
      const ghUserName = `https://api.github.com/users/${username}`;
      return axios.get(ghUserName);
    } catch (err) {
    }
  }
};

module.exports = api;
