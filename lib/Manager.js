// properties name, id, email, officeNumber
// same functions but getRole() needs to be overridden to return Manager

const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

    super (name, id, email);

    this.officeNumber = officeNumber;
}

getRole () {
    return "Manager";
}
}

module.exports = Manager;