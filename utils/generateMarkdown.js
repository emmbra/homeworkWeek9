function generateMarkdown(data) {
return `
# ${data.title}
${license}(${data.html_url})

## Description
${data.description}

## Table of Contents
${tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${contributors}

## Tests
In terminal, run the following command:

npm test

## Questions
<img src = "${data.avatar_url}" alt ="profile avatar"/>
Please contact [${data.login}](${data.html_url}) directly at ${data.accountemail}
`;
}

module.exports = generateMarkdown;
