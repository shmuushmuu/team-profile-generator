const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should have a name, an ID number, and an email", () => {
    const employee = new Employee('Bob', 5678, 'bobbob@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain('@');
    expect(employee.id).toEqual(expect.any(Number));

});
});
