const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const employeeInfo = [
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
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter this employee`s name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is this employee`s ID?',
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee`s ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is this employee`s email?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter this employee`s email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is thie manager`s office phone number?',
            name: 'officeNumber',
            when: (officeNumberInput) => officeNumberInput.role === 'Manager',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the Manager`s office phone number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is this engineer`s GitHub account?',
            name: 'gitHub',
            when: (gitHubInput) => gitHubInput.role === 'Engineer',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineer`s GitHub.');
                    return false;
                }
            }
        }, {
            type: 'input',
            message: 'Where does this intern go to school?',
            name: 'school',
            when: (schoolInput) => schoolInput.role === 'Intern',
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
    ];



const writeFile = data => {
    fs.writeFile('./Develop/dist/team.html', data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Now that you know your team better, make sure you don`t say anything offensive! :)')
        }
    })
};


const addEmployee = () => {
return inquirer.prompt(employeeInfo)
    .then(data => {
        let { role, name, id, email, officeNumber, gitHub, school } = employeeData;
        let employee;
        if (role === 'Manager') {
            employee = new Manager(name, id, email, officeNumber)
        }
        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, gitHub)
        }
        if (role === 'Intern') {
            employee = new Intern(name, id, email, school)
        }
    });
};

addEmployee();