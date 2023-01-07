const Intern = require("../lib/Intern");

describe("Interns are employees who are still in school", () => {
    it("should add a school name to the other empoloyee info",() => {

        const intern = new Intern('Ruth', 3412, 'ruhtruth@gmail.com', 'UNCC');
        
        expect(intern.school).toEqual(expect.any(String));
    });
});
