function generateMarkdown(data) {
let license = data.license;
switch (license) {
  case "MIT License":
    license = "[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)]";
    break;
  case "GNU General Public License v3":
    license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    break;
  case "Apache License":
    license = "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    break;
  case "Mozilla Public License 2.0":
    license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
    break;
  default:
    license = license = "[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)]";
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
* [Contribute](#Contribute)

## Installation
${data.install}

## Usage
${data.usage}

## License
This project is licensed under: ${data.license}.

## Contributing
${data.contributors}

## Tests
${data.tests}

## Questions
<img src = "${data.image}" alt ="GitHub user picture"/>
<br/>
For any questions or comments, email ${data.name} directly at <a href ="mailto${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;
