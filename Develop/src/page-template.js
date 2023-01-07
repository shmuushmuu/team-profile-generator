// create the team
const managerHTML = manager => {
    return `
    <article>
    <h2>Manager: ${manager.name}</h2>
    <ul>
      <li>ID: ${manager.id}</li>
      <li>Email: <a href="mailto:${manager.email}">${manager.email}</li>
      <li>Office Number: ${manager.officeNumber}</li>
    </ul>
  </article>
  `
};

const engineerHTML = engineer => {
    return `  
  <article>
    <h2>Engineer: ${engineer.name}</h2>
    <ul>
      <li>ID: ${engineer.id}</li>
      <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</li>
      <li>GitHub: <a href="#${engineer.github}">person</a></li>
    </ul>
  </article>
  `
};

const internHTML = intern => {
    return `
    <article>
      <h2>Intern: ${intern.name}</h2>
      <ul>
        <li>ID: ${intern.id}</li>
        <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li>School: ${intern.school}</li>
      </ul>
    </article>`
}

const generatePage = teamArray => {
    employeeList = [];
    for (let i = 0; teamArray.length > i; i++) {
        const role = teamArray[i].getRole();

        if (role === "Manager") {
            employeeList.push(managerHTML(teamArray[i]));
        }

        if (role === "Engineer") {
            employeeList.push(engineerHTML(teamArray[i]));
        }

        if (role === "Intern") {
            employeeList.push(internHTML(teamArray[i]));
        }
    }
    const newTeam = employeeList.join('');
    return htmlPage(newTeam);
};

// export function to generate entire page
const htmlPage = newTeam => {
    // TODO: MAIN HTML TEMPLATE LITERAL GOES HERE
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meet Your Team</title>

  <style>
    @import "https://cdn.simplecss.org/simple.min.css";

    main {
      display: grid;
      grid-column: 1/-1;
      justify-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      max-width: 1140px;
      margin: auto;
    }

    article {
      width: 100%;
    }

    @media screen and (max-width: 1140px) {
      main {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (max-width: 720px) {
      main {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>

  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html> `
}
module.exports = generatePage;