const fs = require("fs");

const generatePage = (employeeArr) => {

  return employeeArr.map((data) => {
    let title = data.getRole();

    if (title === "Manager") {
      return `
      <div class ="col-3 card p-2 m-2 shadow-lg">
      <div class ="card-body">
      <h5 class ="card-title p-2 bg-primary text-white">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-chalkboard-teacher"></i> ${title}</h6>
      <p class="card-text">Employee ID: ${data.getId()}</p>
      <p class ="card-text"><a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
      <p class="card-text">Phone: ${data.getOfficeNumber()}</p>
      </div>
            </div>
            `;
    } else if (title === "Engineer") {
      return `
      <div class ="col-3 card p-2 m-2 shadow-lg">
      <div class ="card-body">
      <h5 class ="card-title p-2 bg-primary text-white">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-cogs"></i> ${title}</h6>
      <p class="card-text">Employee ID: ${data.getId()}</p>
      <p class ="card-text"><a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
      <p class ="card-text">GitHub: <a href="https://www.github.com/${data.getGithub()}">${data.getGithub()}</a></p>
      </div>
            </div>
            `;
    } else {
      return `
      <div class ="col-3 card p-2 m-2 shadow-lg">
      <div class ="card-body">
      <h5 class ="card-title p-2 bg-primary text-white">${data.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-book-reader"></i> ${title}</h6>
      <p class="card-text">Employee ID: ${data.getId()}</p>
      <p class ="card-text"><a href="mailto:${data.getEmail()}">${data.getEmail()}</a></p>
      <p class="card-text">University: ${data.getSchool()}</p>
      </div>
            </div>
            `;
    }
  });
};

module.exports = (templateData) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <title>Team Profile</title>
</head>
<body>
    <header class="hero">
    <h1 class="bg-primary text-white text-center p-3">My Team Profile</h1>
      </header>
      <main class="container">
      <div class="row d-flex justify-content-around align-items-center p-2">
            ${generatePage(templateData).join('')}
        </div>
      </main>
</body>
</html>`;
};