// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js')
const fs = require('fs');

// TODO: Create an array of questions for user input
const data = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your project name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project (Required)',
            validate: nameInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a project description!');
                  return false;
                }
              }               
        },
        {
            type: 'checkbox',
            name: 'contents',
            message: 'What sections would you like to include in your Table of Contents?',
            choices: ['Installation', 'Usage', 'License', 'Contribributing', 'Tests', 'Questions']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project.',  
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use your project.',  
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license is your project covered under?',  
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please list any collaborators on your project.',  
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you have written tests for your project, provide examples of how to run them.',  
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',  
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your GitHub profile?',  
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',  
        },
    ])

}; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileName, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
    };

// TODO: Create a function to initialize app
function init() {
    data();
    markdown();
    writeToFile();
};

// Function call to initialize app
init();
