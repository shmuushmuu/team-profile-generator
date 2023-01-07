const Manager = require("../lib/Manager");

describe("Managers are employees who have an office phone number", () => {
    it("should add an office phone number to the other employee info", () => {

        const manager = new Manager('Cami', 9876, 'camiemail@gmail.com', '0987654321');
        
        expect(manager.officeNumber).toEqual(expect.any(String));
    })
});

