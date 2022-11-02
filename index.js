// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, renderLicenseSection } = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your README title?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Add a description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation instructions',
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'Add usage instructions',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add contribution instructions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Add test information',
    }, 
    {
        type: 'list',
        name: 'license',
        choices: ['ISC', 'MIT', 'Mozilla'],
        filter(val) {
            return val.toLowerCase();
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:'
    }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));

        writeToFile('./example-READMEs/TEST1.md', generateMarkdown(answers))
        fs.appendFile('./example-READMEs/TEST1.md', renderLicenseSection(answers.license), (err) =>
        err ? console.error(err) : console.log('Commit logged!'))
      });
}

// Function call to initialize app
init();

