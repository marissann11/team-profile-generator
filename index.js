const fs = require('fs');
const inquirer = require('inquirer');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's full name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your team manager's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your team manager's office number?"
        },
        {
            type: 'list',
            name: 'xRoads',
            message: "What would you like to do next?",
            choices: ["Add Engineer", "Add Intern", "I'm done building my team"]
        }
    ]).then (response => {
        if (response.xRoads === "Add Engineer") {
            promptEngineer();
        } else if (response.xRoads === "Add Intern") {
            promptIntern();
        } else {
            generatePage();
        }
    })
}
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your Engineer's full name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Engineer's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your Engineer's GitHub username?"
        },
        {
            type: 'list',
            name: 'xRoads',
            message: "What would you like to do next?",
            choices: ["Add Engineer", "Add Intern", "I'm done building my team"]
        }
    ]).then (response => {
        if (response.xRoads === "Add Engineer") {
            promptEngineer();
        } else if (response.xRoads === "Add Intern") {
            promptIntern();
        } else {
            generatePage();
        }
    })
}
function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your Intern's full name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Intern's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Where is your intern in school?"
        },
        {
            type: 'list',
            name: 'xRoads',
            message: "What would you like to do next?",
            choices: ["Add Engineer", "Add Intern", "I'm done building my team"]
        }
    ]).then (response => {
        if (response.xRoads === "Add Engineer") {
            promptEngineer();
        } else if (response.xRoads === "Add Intern") {
            promptIntern();
        } else {
            generatePage();
        }
    })
}
const generatePage = () => {
    console.log("generate page")
}

promptManager();