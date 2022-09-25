// name, id, email, school
// same functions but add getSchool() & override getRole with Intern

const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        intern (name, id, email);

        this.school = school;
    }

    get school () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern