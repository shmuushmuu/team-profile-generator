const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What is this employee`s role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            message: 'What is this employee`s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is this employee`s ID?',
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
            when:(officeNumberInput) => officeNumberInput.role === 'Manager',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return: true;
                } else {
                    console.log('Please enter the Engineer`s GitHub.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is this engineer`s GitHub account?',
            name: 'gitHub',
            when:(gitHubInput) => gitHubInput.role === 'Engineer',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineer`s GitHub.');
                    return false;
                }
            }
        },{
            type: 'input',
            message: 'Where does this intern go to school?',
            name: 'school',
            when:(schoolInput) => schoolInput.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the intern`s school.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            message: 'Do you want to add more employees to the team?',
            name: 'add',
            default: false,
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