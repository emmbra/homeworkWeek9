function generateMarkdown(data) {
let license = data.license;
switch (license) {
  case "MIT License":
    data.license = "MIT License ![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)";
    break;
  case "GNU General Public License v3":
    data.license = "GNU General Public License v3 ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    break;
  case "Apache License":
    data.license = "Apache License ![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    break;
  case "Mozilla Public License 2.0":
    data.license = "Mozilla Public License 2.0 ![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
    break;
  default:
    data.license = "MIT License ![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)";
    break;
}
return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Tests](#Tests) 
* [Contributors](#Contributors)
* [Questions](#Questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
This project is licensed under: ${data.license}.

## Tests
${data.tests}

## Contributors
${data.contributors}

## Questions
<img src = "${data.image}" alt ="GitHub user picture"/>
<br/>
For any questions or comments, email ${data.name} directly at <a href ="mailto${data.email}">${data.email}</a>.
`;
}

module.exports = generateMarkdown;
