// create the team
// const generateTeamMembers = (team) => {

// };

// export function to generate entire page
module.exports = (team) => {
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
    <article>
      <h2>${manager.name}</h2>
      <ul>
        <li>ID: ${manager.id}</li>
        <li>Email: ${manager.email}</li>
        <li>Office Number: ${manager.officeNumber}</li>
      </ul>
    </article>
    <article>
      <h2>${engineer.name}</h2>
      <ul>
        <li>ID: ${engineer.id}</li>
        <li>Email: ${engineer.email}</li>
        <li>GitHub: <a href="#${engineer.github}">person</a></li>
      </ul>
    </article>
    <article>
      <h2>${intern.name}</h2>
      <ul>
        <li>ID: ${intern.id}</li>
        <li>Email: ${intern.email}</li>
        <li>School: ${intern.school}</li>
      </ul>
    </article>
  </main>
  <footer>
    &copy; 2022-2023
  </footer>
</body>
</html> `

};
