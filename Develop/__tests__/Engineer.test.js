const Engineer = require("../lib/Engineer");

describe("Engineers are Employees who have a GitHub.", () => {
    const engineer = new Engineer('Sam', 0155, 'shmuushmuu@gmail.com', 'shmuushmuu');

    expect(engineer.gitHub).toEqual(expect.any(String));
});
