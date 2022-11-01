// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const badgeOptions = {
      'isc': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      'mit': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'mozilla': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  }

  if (license) {
    return badgeOptions[license]
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
${renderLicenseBadge(license)}
`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Test](#test)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## How to Contribute
${data.contributing}

## Test
${data.tests}

## Questions
Github: https://www.github.com/${data.github}<br>
Email: ${data.email}

## License
`;
}

module.exports = {
  generateMarkdown, 
  renderLicenseSection
};
