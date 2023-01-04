const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const

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