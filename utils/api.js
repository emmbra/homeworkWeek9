const axios = require("axios");
const api = {
  getUser(username) {
    try {
      const config = {
        headers: {                //.env file always accessed with process.env
          "Authorization": `token ${process.env.GITHUB_API}`
        }
      }
      const ghUserName = `https://api.github.com/users/${username}`;
      return axios.get(ghUserName, config);
    } catch (e) {
      throw e;
    }
  }
};


module.exports = api;
