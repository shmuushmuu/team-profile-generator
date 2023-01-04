const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');