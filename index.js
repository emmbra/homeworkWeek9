const fs = require("fs");
const inquirer = require("inquirer");
// require modularized api call from axios
const api = require("./utils/api.js");
// require modularized function for generating markdown files
const generateMarkdown = require("./utils/generateMarkdown.js");
// require util to make functions promises
const util = require("util");
// promisify the function so it can be used asynchronously and so .then and .catch can be called on it
const asyncWriteFile = util.promisify(fs.writeFile);
function readmePrompts () {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps to install this project?",
        name: "install"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
    {
        type: "list",
        message: "Please select a license for this project:",
        name: "license",
        choices: [
            'MIT license',
            'GNU General Public License v3',
            'Apache License 2.0',
            'Mozilla Public License 2.0'
        ]
    },
    {
        type: "input",
        message: "Who are the contributors to this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "How has this project been tested?",
        name: "tests"
    }
]);
}

async function init() {
    try {
        const readmeAnswers = await readmePrompts();
        await api.getUser(readmeAnswers.username).then(function (result) {
            console.log(result);
            readmeAnswers.image = result.data.avatar_url;
            readmeAnswers.name = result.data.name;
        });
        const readmeMD = generateMarkdown(readmeAnswers);
        await asyncWriteFile("./generated-readme/README.md", readmeMD);
        console.log("README.md successfully created!");
    } catch (e) {
        console.log("Error!" + e);
    }
}

init();


