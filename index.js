//Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');

//Create an array of questions for user input
const promptData = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
            validate: descriptionInput => {
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
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'The Unlicense']
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
            name: 'email',
            message: 'What is your e-mail address?',  
        },
    ])
}   

// Create a function to write the file
function writeToFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, generateMarkdown(data), err => {
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

// Create a function to initialize app
function init() {
    promptData()
        .then(data => {
            return writeToFile("./dist/README.md", data);  
        })
}

// Function call to initialize app
init()
