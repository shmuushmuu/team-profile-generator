const Employee = require("../lib/Employee");

describe("Creates employee section. This is our class. All Managers, Engineers, and Interns are employees", () => {
    const employee = new Employee('Bob', 5678, 'bobbob@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain('@');
    expect(employee.id).toEqual(expect.any(Number));

});
