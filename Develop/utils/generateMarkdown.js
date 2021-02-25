// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `License
    This Project is licensed under ${license} license`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Email: ${data.email}
  Project Title: ${data.project}
  Description: ${data.description}
  License: ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  Dependencies: ${data.depend}
  Test command: ${data.test}
  Additional Info: ${data.addinfo}
  How to Contribute: ${data.addcode}
`;
}

module.exports = generateMarkdown;
