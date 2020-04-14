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
// require util so can promisify functions
const util = require("util");
// promisify the function so it can be used synchronously and so .then and .catch can be called on it
const writeFileAsync = util.promisify(fs.writeFile);

// use async and await to make asyncWriteFile wait until the api request goes off first so it writes the correct data
// async and await can be used vs. nesting the functions (e.g. nested ajax calls) to make them act synchronously
// updating everything to ES6+ syntax, keeping old syntax commented out for reference
// async function init() { -- pre-ES6
const init = async () => {
  // ES6 arrow function with async
  try {
    const readmeAnswers = await readmePrompts();
    const result = await api.getUser(readmeAnswers.username);
      // const {name, email, avatar_url} = result.data; destructuring example
    readmeAnswers.image = result.data.avatar_url;
    readmeAnswers.name = result.data.name;
    readmeAnswers.email = result.data.email;
    const readmeMD = await generateMarkdown(readmeAnswers);
    await writeFileAsync("./generated-readme/README.md", readmeMD);
    console.log("README.md successfully created!");
  } catch (e) {
    console.log("Error!" + e);

  }
};

init();

// examples of how to deal with invalid github username

// function
// prompt => username again, "it was an invalid username"

// function revStr(str){
//   if (str === '') return '';
//   return revStr(str.substr(1)) + str[0];
// }
// revStr('cat');
// // cat
// // at + c
// // t + a
// // "" + t

// try {
//   const readmeAnswers = await readmePrompts();
//   const result = await api.getUser(readmeAnswers.username);
//     // const {name, email, avatar_url} = result.data; destructuring example
//   readmeAnswers.image = result.data.avatar_url;
//   readmeAnswers.name = result.data.name;
//   readmeAnswers.email = result.data.email;
//   const readmeMD = await generateMarkdown(readmeAnswers);
//   await writeFileAsync("./generated-readme/README.md", readmeMD);
//   console.log("README.md successfully created!");
// } catch (e) {
//   console.log("Error!" + e);
//   // call function that prompts for username 
//   // run this function again (recursively)
// }

// try {
//   const result = await api.getUser(readmeAnswers.username);
// } catch (e) {
//   console.log("Error!" + e);

// }

// try {
//   const readmeAnswers = await readmePrompts();
// } catch (e) {
//   console.log("Error!" + e);
// }

// try {
//   readmeAnswers.image = result.data.avatar_url;
//   readmeAnswers.name = result.data.name;
//   readmeAnswers.email = result.data.email;
//   const readmeMD = await generateMarkdown(readmeAnswers);
//   await writeFileAsync("./generated-readme/README.md", readmeMD);
//   console.log("README.md successfully created!");
// } catch (e) {
//   console.log("Error!" + e);
// }



// try {
//   const readmeAnswers = await readmePrompts();
//   const result = await api.getUser(readmeAnswers.username) || //call function here;
//     // const {name, email, avatar_url} = result.data; destructuring example
//   readmeAnswers.image = result.data.avatar_url;
//   readmeAnswers.name = result.data.name;
//   readmeAnswers.email = result.data.email;
//   const readmeMD = await generateMarkdown(readmeAnswers);
//   await writeFileAsync("./generated-readme/README.md", readmeMD);
//   console.log("README.md successfully created!");
// } catch (e) {
//   console.log("Error!" + e);

// }

// // this function
// // prompt for user name again
// // then call result again



// try {
//   const readmeAnswers = await readmePrompts();
//   const result = await api.getUser(readmeAnswers.username);
//   if (result === undefined) {
//     // prompt and recurse
//   } else {
//     readmeAnswers.image = result.data.avatar_url;
//     readmeAnswers.name = result.data.name;
//     readmeAnswers.email = result.data.email;
//     const readmeMD = await generateMarkdown(readmeAnswers);
//     await writeFileAsync("./generated-readme/README.md", readmeMD);
//     console.log("README.md successfully created!");
//   }
// } catch (e) {
//   console.log("Error!" + e);

// }

// [1,5,2,8,3,4,5,4,6,3]
// [1,5,2,8,3]