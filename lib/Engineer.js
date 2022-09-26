// properties name, id, email, and github
// same functions plsu github() & getRole overrides to return Engineer

const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;
    }

    getRole () {
        return "Engineer";
    }

    getGithub () {
        return this.github;
    }
}

module.exports = Engineer;