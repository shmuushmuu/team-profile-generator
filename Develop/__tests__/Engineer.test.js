const Engineer = require("../lib/Engineer");

describe("Engineers are Employees who have a GitHub.", () => {
    const engineer = new Engineer('Tim', 5745, 'Tim@gmail.com', 'timmit');

    expect(engineer.gitHub).toEqual(expect.any(String));
});
