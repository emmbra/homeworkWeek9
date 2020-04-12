function generateMarkdown(data) {
return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Tests](##Tests) 
* [Contribute](##Contribute)

## Installation
${data.install}

## Usage
${data.usage}

## License
This project is licensed under: ${data.license} license.

## Contributing
${data.contributors}

## Tests
${data.test}

## Questions
<img src = "${data.avatar_url}" alt ="profile avatar"/>
Please contact [${data.login}](${data.html_url}) directly at ${data.accountemail}
`;
}

module.exports = generateMarkdown;
