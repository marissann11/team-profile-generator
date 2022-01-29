const fs = require("fs");

const generatePage = (employeeArr) => {
  console.log(employeeArr);

  return employeeArr.map((data) => {
    let title = data.getRole();

    if (title === "Manager") {
      return `
      <div class ="col-3 card">
      <div class ="card-body">
      <h5 class ="card-title">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
      <p class="card-text">${data.getId()}</p>
      <a href="#" class="card-link">${data.getEmail()}</a>
      <p class="card-text">${data.getOfficeNumber()}</p>
            </div>
            `;
    } else if (title === "Engineer") {
      return `
      <div class ="col-3 card">
      <div class ="card-body">
      <h5 class ="card-title">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
      <p class="card-text">${data.getId()}</p>
      <a href="#" class="card-link">${data.getEmail()}</a>
      <a href="#" class="card-link">${data.getGithub()}</a>
            </div>
            `;
    } else {
      return `
      <div class ="col-3 card">
      <div class ="card-body">
      <h5 class ="card-title">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${title}</h6>
      <p class="card-text">${data.getId()}</p>
      <a href="#" class="card-link">${data.getEmail()}</a>
      <p class="card-text">${data.school()}</p>
            </div>
            `;
    }
  });
};

module.exports = generatePage;
