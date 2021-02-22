// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type:'input',
            name:'project',
            message:'What is your Project title?',
        },
        {
            type:'input',
            name:'description',
            message:'Please write a short descrition of your project.',
        },
        {
            type:'list',
            name: 'license',
            message:'What king of license should your project have?',
            choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type:'input',
            name:'depend',
            message:'What command should be run to download your dependencies?',
            default:'npm i',
        },
        {
            type:'input',
            name:'test',
            message:'What command should be run to test your npm?',
            default:'npm test',
        },
        {
            type:'input',
            name:'addinfo',
            message:'Is there any additional information the user needs to know about using the repo?',
        },
        {
            type:'input',
            name:'addcode',
            message:'What should the user know to contribute to the project?',
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    questions()
    writeToFile()
}

// Function call to initialize app
init();
