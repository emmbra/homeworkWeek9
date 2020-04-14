const inquirer = require("inquirer");

// function readmePrompts() { // pre-ES6
const readmePrompts = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
      validate: function validateUsername(username) {
        // attempt to turn if/else statement into a ternary
        const result = username !== "" ? true : "Username cannot be blank!";
        return result;
        // if (username === "") {
        //   return "Username cannot be blank!";
        // } else {
        //   return true;
        // }
      },
    },
    {
      type: "input",
      message: "What is the project title?",
      name: "title",
      validate: function validateTitle(title) {
        if (title === "") {
          return "Title cannot be blank!";
        } else {
          return true;
        }
      },
    },
    {
      type: "input",
      message: "What is the project description?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the steps to install this project?",
      name: "install",
    },
    {
      type: "input",
      message: "How will this project be used?",
      name: "usage",
    },
    {
      type: "list",
      message: "Please select a license for this project:",
      name: "license",
      choices: [
        "MIT license",
        "GNU General Public License v3",
        "Apache License 2.0",
        "Mozilla Public License 2.0",
      ],
    },
    {
      type: "input",
      message: "Who are the contributors to this project?",
      name: "contributors",
    },
    {
      type: "input",
      message: "How has this project been tested?",
      name: "tests",
    }
  ]);
};

module.exports = readmePrompts;
