const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is this employee`s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is this employee`s GitHub ID?',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'What is this employee`s email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is this employee`s office number?',
            name: 'officeNumber',
        },
        {
            type: 'list',
            message: 'What is this employee`s role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'confirm',
            message: 'Do you want to add more employees to the team?',
            name: 'add',
            if (answer = false) {
                return answers
            } else {
                addEmployee()
            }
        }
    ]);
};

const writeFile = data => {
    fs.writeFile('newHTML.html', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Now that you know your team better, make sure you don`t say anything offensive! :)')
        }
    })
};

addEmployee()
    .then(answers => {
        return generateHTML(answers);
    })
    .then(data => {
        return writeFile(data);
    });