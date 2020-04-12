const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
const asyncWriteFile = util.promisify(fs.writeFile);
function questionPrompts () {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the project's description?",
        name: "description"
    },
    {
        type: "checkbox",
        message: "What should be included in the table of contents?",
        name: "table",
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
    },
    {
        type: "input",
        message: "What are the steps to install this project?",
        name: "installation"
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
        message: "Who are the contributors to this project? (List github usernames separated by commas.)",
        name: "contributing"
    },
    {
        type: "input",
        message: "How has this project been tested?",
        name: "tests"
    }
]);
}

// function writeToFile(data) {
//     console.log(data);
//     // variables
//     let contributors = data.contributing.split(",");
//     let contributorsArray = [];
//     contributors.map(username => contributorsArray.push(username.trim()));
//     let contributorsString = "";
//     contributorsArray.map(username => {
//         contributorsString += `[${username}]("https://github.com/${username}")\n \n`
//     })
//     let tableOfContents = "";
//     data.table.map(contents => {
//         tableOfContents += `*[${contents}](#${contents.toLowerCase().trim()})\n \n`
//     })

    
//     let license = 
//     data.license === "MIT license" ? "[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)]" :
//     data.license === "GNU General Public License v3" ? "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]" :
//     data.license === "Apache License 2.0" ? "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]" :
//     "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]" 


//     fs.writeFile(`${data.title}.md`), readmeTemplate, function(err) {
//         if(err) {
//             console.log(err);
//             throw err;
//         } else {
//             console.log("It worked!");
//         }
//     }
// };


function init() {
    try {
        inquirer.prompt(questions).then(response => {
    }
    


init();
