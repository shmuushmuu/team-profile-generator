const Manager = require("../lib/Manager");

describe("Managers are employees who have an office phone number", () => {
const manager = new Manager('Sam', 0155, 'shmuushmuu@gmail.com', '0987654321');

expect(manager.officeNumber).toEqual(expect.any(String));
});

