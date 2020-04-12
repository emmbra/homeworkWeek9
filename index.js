const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const util = require("util");
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
        type: "input",
        message: "What license is this project under?",
        name: "license"
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
            readmeAnswers.image = result.data.avatar_url;
            readmeAnswers.name = result.data.name;
        });
        const readmeMD = generateMarkdown(readmeAnswers);
        await asyncWriteFile("README.md", readmeMD);
        console.log("README.md successfully created!");
    } catch (err) {
        console.log("Error" + err);
    }
}


init();

// {
//     type: "list",
//     message: "Please select a license for this project:",
//     name: "license",
//     choices: [
//         'MIT license',
//         'GNU General Public License v3',
//         'Apache License 2.0',
//         'Mozilla Public License 2.0'
//     ]
// },
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



