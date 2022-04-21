// call in Employee
const Employee = require('./employee');

// create an extension
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, 1 , email)
        this.officeNumber = officeNumber
    }
    getRole(){
        return 'Manager'
    }  
}

// export module
module.exports = Manager;

// test
const nManager = new Manager('me', 1,' g@gmail' , 123)
console.log('---manager---')
nManager.getName()
nManager.getId()
nManager.getEmail()
nManager.getRole()
