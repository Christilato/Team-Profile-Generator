// properties name, id, email, and github
// same functions plsu github() & getRole overrides to return Engineer

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        engineer(name, id, email);

        this.github = github;
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;