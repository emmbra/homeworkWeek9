const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

const questions = [
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
            'GNU General Public License',
            'Apache License 2.0',
            'Mozilla Public License 2.0'
        ]
    },
    {
        type: "input",
        message: "Who are the contributors to this project? (please list contributors' github usernames separated by commas)",
        name: "contributing"
    },
    {
        type: "input",
        message: "How has this project been tested?",
        name: "tests"
    }
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
