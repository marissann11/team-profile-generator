const fs = require("fs");
const inquirer = require("inquirer");

const promptManager = async () => {
  let res = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your team manager's full name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your team manager's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your team manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your team manager's office number?",
    },
    {
      type: "list",
      name: "xRoads",
      message: "What would you like to do next?",
      choices: ["Add Engineer", "Add Intern", "I'm done building my team"],
    },
  ]);
  return res.xRoads === "Add Engineer" ? promptEngineer()
    : res.xRoads === "Add Intern" ? promptIntern()
    : generatePage();
};
const promptEngineer = async () => {
  let res = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Engineer's full name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your Engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your Engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Engineer's GitHub username?",
      },
      {
        type: "list",
        name: "xRoads",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "I'm done building my team"],
      },
    ])
    return res.xRoads === "Add Engineer" ? promptEngineer()
    : res.xRoads === "Add Intern" ? promptIntern()
    : generatePage();
};
const promptIntern = async () => {
  let res = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your Intern's full name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your Intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your Intern's email?",
      },
      {
        type: "input",
        name: "school",
        message: "Where is your intern in school?",
      },
      {
        type: "list",
        name: "xRoads",
        message: "What would you like to do next?",
        choices: ["Add Engineer", "Add Intern", "I'm done building my team"],
      },
    ])
    return res.xRoads === "Add Engineer" ? promptEngineer()
    : res.xRoads === "Add Intern" ? promptIntern()
    : generatePage();
};
const generatePage = () => {
  console.log("generate page");
};

promptManager();
