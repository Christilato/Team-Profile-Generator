const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require ("path");
const pageTemplate = require ("./src/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

// manager
const inputManager = [
    inquirer.prompt ({
     {
        type: "input",
        message: "Who is the team manager?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the team manager's id?",
        name: "managerId",
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOfficeNum",
    },
})];

const inputEmployee [
    inquirer.prompt ({
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "addMember",
        choices: ["Engineer", "Intern", "I do not want to add any more team members"],
    },
    {
        type: "input",
        message: "What is the name of the Employee",
        name: "employeeName",
    },
    {
        type: "input",
        message: "What is the employee's id?",
        name: "employeeId",
    },
    {
        type: "input",
        message: "What is the employee's email?",
        name: "employeeEmail",
    },
    {
        type: "input",
        message: "What is the employee's github username?",
        name: "employeeGithub",
    },
    {
        type: "input",
        message: "What is the Intern's school?",
        name: "internSchool",
    },

}) ;
   
];






