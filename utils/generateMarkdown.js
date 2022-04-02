// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (!license) {
//     return '';
//   }

//   return `
//     <section class="my-3" id="about">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//       <p>${aboutText}</p>
//     </section>
//   `;
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const license = data.license
  if (!license) {
    return '';
  };

  if (license == "GNU AGPLv3") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/agpl-3.0/]"
  };

  if (license == "GNU GPLv3") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/gpl-3.0//]"
  };

  if (license == "GNU LGPLv3") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/lgpl-3.0//]"
  };

  if (license == "Mozilla Public License 2.0") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/mpl-2.0/]"
  };

  if (license == "Apache License 2.0") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/apache-2.0/]"
  };

  if (license == "MIT License") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/mit/]"
  };

  if (license == "Boost Software License 1.0") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/bsl-1.0/]"
  };

  if (license == "The Unlicense") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/unlicense/]"
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license) {
//     return '';
//   }

//   return `
//     <section class="my-3" id="about">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//       <p>${aboutText}</p>
//     </section>
//   `;
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
 
  ## Description
 
  🔍 ${data.description}
 
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## License
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />

  This application is covered by the ${data.license} license. 

  ${license}

  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
 
  Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
  <br />
  Email me with any questions: ${data.email}
      `;
    }
    

module.exports = generateMarkdown;
