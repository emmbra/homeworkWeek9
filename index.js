//require dotenv always on line 1 of index file
require("dotenv").config();

// declare all my variable requirements
const fs = require("fs");

// require modularized api call from axios
const api = require("./utils/api.js");
// require modularized function for generating markdown files
const generateMarkdown = require("./utils/generateMarkdown.js");
// require modularized function for readme prompts
const readmePrompts = require("./utils/readmePrompts.js");
// require util to make functions promises
const util = require("util");
// promisify the function so it can be used synchronously and so .then and .catch can be called on it
const writeFileAsync = util.promisify(fs.writeFile);

// use async and await to make asyncWriteFile wait until the api request goes off first so it writes the correct data
// async and await can be used vs. nesting the functions (e.g. nested ajax calls) to make them act synchronously
// updating everything to ES6+ syntax, keeping old syntax commented out for reference
// async function init() { -- pre-ES6
const init = async () => {
  // ES6
  try {
    const readmeAnswers = await readmePrompts();
    await api.getUser(readmeAnswers.username).then((result) => {
      // (function (result) {
      console.log(result);
      readmeAnswers.image = result.data.avatar_url;
      readmeAnswers.name = result.data.name;
      readmeAnswers.email = result.data.email;
    });
    const readmeMD = generateMarkdown(readmeAnswers);
    await writeFileAsync("./generated-readme/README.md", readmeMD);
    console.log("README.md successfully created!");
  } catch (e) {
    console.log("Error!" + e);
  }
};

init();
