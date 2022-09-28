const inquirer = require("inquirer");

const fs = require("fs");
const path = require("path");
const pageTemplate = require("./src/page-template");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const employees = [];
const idArray = [];

console.log("Welcome to the team generator! \n Use `npm run reset` to reset the dist folder");

function generateTeam() {
    function createManager() {
        console.log("Start building your team");
        inquirer.prompt([
            {
                type: "input",
                message: "Who is the team manager?",
                name: "managerName",
                validate: (answer) => {
                    if (answer !== "")
                    {
                        return true;
                    }
                    return "Please enter atleast 1 character";
                }
            },
            {
                type: "input",
                message: "What is the team manager's id?",
                name: "managerId",
                validate: (answer) => {
                    const ok = answer.match(/^[1-9]\d*$/);
                    if (ok)
                    {
                        return true;
                    }
                    return "Please enter a number greater than 0";
                }
            },
            {
                type: "input",
                message: "What is the team manager's email?",
                name: "managerEmail",
                validate: (answer) => {
                    const ok = answer.match(/\S+@\S+\.\S+/);
                    if (ok)
                    {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                message: "What is the team manager's office number?",
                name: "managerOfficeNum",
                validate: (answer) => {
                    const ok = answer.match(/^[1-9]\d*$/);
                    if (ok)
                    {
                        return true;
                    }
                    return "Please enter a number greater than 0";
                }
            },

        ])
            .then((answers) => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNum
                );
                employees.push(manager);
                idArray.push(answers.managerId);
                createTeam();
            });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                message: "Which type of team member would you like to add?",
                name: "addMember",
                choices: ["Engineer", "Intern", "I do not want to add any more team members"],
            },
        ])
            .then((userChoice) => {
                switch (userChoice.addMember)
                {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default : 
                        buildTeam();
                }
            });
    }

    function addEngineer () {
        inquirer.prompt ([
            {
                type: "input",
                message: "What is the name of the Engineer",
                name: "engineerName",
                validate: (answer) => {
                    if (answer !== "")
                    {
                        return true;
                    }
                    return "Please enter atleast 1 character";
                } 
            },
            {
                type: "input",
                message: "What is the engineer's id?",
                name: "engineerId",
                validate: (answer) => {
                    const ok = answer.match(/^[1-9]\d*$/);
                    if (ok)
                    {
                        if(idArray.includes(answer)) {
                            return "This id is already taken. Try again."
                        } else { 
                            return true;
                        }                             
                    }
                    return "Please enter a number greater than 0";
                }
            },
            {
                type: "input",
                message: "What is the employee's email?",
                name: "employeeEmail",
                validate: (answer) => {
                    const ok = answer.match(/\S+@\S+\.\S+/);
                    if (ok)
                    {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                message: "What is the employee's github username?",
                name: "engineerGithub",
                validate: (answer) => {
                    if (answer !== "")
                    {
                        return true;
                    }
                    return "Please enter atleast 1 character";
                } 
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            employees.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }

    function addIntern () {
        inquirer.prompt ([
            {
                type: "input",
                message: "What is the name of the Intern",
                name: "internName",
                validate: (answer) => {
                    if (answer !== "")
                    {
                        return true;
                    }
                    return "Please enter atleast 1 character";
                } 
            },
            {
                type: "input",
                message: "What is the intern's id?",
                name: "internId",
                validate: (answer) => {
                    const ok = answer.match(/^[1-9]\d*$/);
                    if (ok)
                    {
                        if(idArray.includes(answer)) {
                            return "This id is already taken. Try again."
                        } else { 
                            return true;
                        }                             
                    }
                    return "Please enter a number greater than 0";
                }
            },
            {
                type: "input",
                message: "What is the intern's email?",
                name: "internEmail",
                validate: (answer) => {
                    const ok = answer.match(/\S+@\S+\.\S+/);
                    if (ok)
                    {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                message: "What is the intern's school?",
                name: "internSchool",
                validate: (answer) => {
                    if (answer !== "")
                    {
                        return true;
                    }
                    return "Please enter atleast 1 character";
                } 
            },
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool
            );
            employees.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }

    function buildTeam () {
        // if(fs.existsSync(DIST_DIR)) {
        //     fs.mkdirSync(DIST_DIR);
        // }
        fs.writeFileSync(distPath, pageTemplate(employees), "utf-8");
    }
    createManager();

}

generateTeam();





