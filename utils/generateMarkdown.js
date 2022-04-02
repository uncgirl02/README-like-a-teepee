// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!data.license) {
    return '';
  }

  if (data.license == "GNU AGPLv3") {
    return  "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  };

  if (data.license == "GNU GPLv3") {
    return  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  };

  if (data.license == "GNU LGPLv3") {
    return  "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  };

  if (data.license == "Mozilla Public License 2.0") {
    return  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  };

  if (data.license == "Apache License 2.0") {
    return  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  };

  if (data.license == "MIT License") {
    return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  };

  if (data.license == "Boost Software License 1.0") {
    return  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  };

  if (data.license == "The Unlicense") {
    return  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  };
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  if (!data.license) {
    return '';
  };

  if (data.license == "GNU AGPLv3") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/agpl-3.0/]"
  };

  if (data.license == "GNU GPLv3") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/gpl-3.0//]"
  };

  if (data.license == "GNU LGPLv3") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/lgpl-3.0//]"
  };

  if (data.license == "Mozilla Public License 2.0") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/mpl-2.0/]"
  };

  if (data.license == "Apache License 2.0") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/apache-2.0/]"
  };

  if (data.license == "MIT License") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/mit/]"
  };

  if (data.license == "Boost Software License 1.0") {
    return  "For more information about this license please visit [https://choosealicense.com/licenses/bsl-1.0/]"
  };

  if (data.license == "The Unlicense") {
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
    
  ${renderLicenseBadge(license)}
 
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
  
  ${renderLicenseBadge(license)}

  This application is covered by the ${data.license} license. 

  ${renderLicenseLink(data)}

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
