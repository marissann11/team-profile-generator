const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/generatePage");

const employeeArr = [];

const promptManager = async () => {
  let res = await inquirer.prompt([
// const managerQ = [
  {
    type: "input",
    name: "name",
    message: "What is your team manager's full name?",
    validate: async (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is your team manager's ID?",
    validate: async (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the employee ID!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your team manager's email?",
    validate: async (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter an email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your team manager's office number?",
    validate: async (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter an office number!");
        return false;
      }
    },
  },
]);
let manager = new Manager(res.name, res.id, res.email, res.officeNumber);
console.log(manager.getRole());
employeeArr.push(manager);
addEmployee();
};
const addEmployee = async () => {
  let res = await inquirer.prompt([
    {
      type: "list",
      name: "xRoads",
      message: "What would you like to do next?",
      choices: ["Add Engineer", "Add Intern", "I'm done building my team"],
    },
  ]);
  if (res.xRoads === "Add Engineer") {
    promptEngineer();
  } else if (res.xRoads === "Add Intern") {
    promptIntern();
  } else {
    // generatePage(employeeArr); what do i do here
    let htmlFile = await generatePage(employeeArr);
    writeFile("./dist/index.html", htmlFile);
  }
};
const promptEngineer = async () => {
  let res = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Engineer's full name?",
      validate: async (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your Engineer's ID?",
      validate: async (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your Engineer's email?",
      validate: async (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your Engineer's GitHub username?",
      validate: async (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter a GitHub!");
          return false;
        }
      },
    },
  ]);
  let engineer = new Engineer(res.name, res.id, res.email, res.github);
  employeeArr.push(engineer);
  console.log(engineer.getRole());
  addEmployee();
};
const promptIntern = async () => {
  let res = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Intern's full name?",
      validate: async (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your Intern's ID?",
      validate: async (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your Intern's email?",
      validate: async (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Where is your intern in school?",
      validate: async (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter the name of a school!");
          return false;
        }
      },
    },
  ]);
  let intern = new Intern(res.name, res.id, res.email, res.school);
  employeeArr.push(intern);
  console.log(intern.getRole());
  addEmployee();
};

const writeFile = (fileName, res) => {
  fs.writeFile("./dist/index.html", res, (err) => {
    err ? console.error(err) : console.log("HTML created!");
  });
};

// const promptManager = async () => {
  // let res = await inquirer.prompt(managerQ);
  // let res2 = await addEmployee(res);
  // let htmlFile = await generatePage(employeeArr);
  // return await writeFile("./dist/index.html", htmlFile);
// };
// something like this idk????

promptManager();
