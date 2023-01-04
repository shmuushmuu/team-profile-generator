const Intern = require("../lib/Intern");

describe("Interns are employees who are still in school", () => {
    const intern = new Intern('Sam', 0155, 'shmuushmuu@gmail.com', 'UNCC');

    expect(intern.school).toEqual(expect.any(String));
});
