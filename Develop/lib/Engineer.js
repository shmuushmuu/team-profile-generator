const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = 'https://github.com/' + gitHub + '/';
    }

    get gitHub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
