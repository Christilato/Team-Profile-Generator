// name, id, email, school
// same functions but add getSchool() & override getRole with Intern

const Employee = require("./employee");

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    getRole () {
        return "Intern";
    }

    getSchool () {
        return this.school;
    }
}

module.exports = Intern