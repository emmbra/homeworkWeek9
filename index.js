//always on line 1
require('dotenv').config();

// declare all my variable requirements
const fs = require("fs");

// require modularized api call from axios
const api = require("./utils/api.js");
// require modularized function for generating markdown files
const generateMarkdown = require("./utils/generateMarkdown.js");
// require modularized function for readme prompts
const readmePrompts = require ("./utils/readmePrompts.js")
// require util to make functions promises
const util = require("util");
// promisify the function so it can be used synchronously and so .then and .catch can be called on it
const writeFileAsync = util.promisify(fs.writeFile);

// use async and await to make asyncWriteFile wait until the api request goes off first so it writes the correct data
// async and await can be used vs. nesting the functions (e.g. nested ajax calls) to make them act synchronously
// const init = async () => {}

async function init() {
  try {
    const readmeAnswers = await readmePrompts();
    await api.getUser(readmeAnswers.username).then(function (result) {
      console.log(result);
      readmeAnswers.image = result.data.avatar_url;
      readmeAnswers.name = result.data.name;
    });
    const readmeMD = generateMarkdown(readmeAnswers);
    await writeFileAsync("./generated-readme/README.md", readmeMD);
    console.log("README.md successfully created!");
  } catch (e) {
    console.log("Error!" + e);
  }
}

init();
