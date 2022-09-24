const inquirer = require ("inquirer");
const fs = require ("fs");
const path = require ("path");
const pageTemplate = require ("./src/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

const questions = [
    {
        type: "input",
        message: "What is the team manager's name?",
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
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "addMember",
        choices: ["Engineer", "Intern", "I do not want to add any more team members"],
    },
    
    // need to loop these questions for Engineer if chosen
    // need to add question to Intern "School name" if chosen

];

function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.createPromptModule(questions).then((inquirerResponses) => {
        console.log("generating html");
        writeToFile("team.html", pageTemplate({...inquirerResponses}));
    });
}

init();