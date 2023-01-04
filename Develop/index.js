const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Who is the manager?",
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the manager`s employee ID?',
            name: 'ID',
        },
        {
            type: 'input',
            message: 'What is the manager`s email?',
            name: 'email',
        },{
            type: 'input',
            message: 'What is the manager`s office number?',
            name: 'officeNumber',
        },
        email
        officenumber
    ])
}

const writeFile = data => {
    fs.writeFile('newHTML.html', data, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('Now that you know your team better, make sure you don`t say anything offensive! :)')
        }
    })
};

questions() 
.then(answers => { 
    return generateHTML(answers);
})
.then(data => {
    return writeFile(data);
});