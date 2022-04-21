// call in Employee
const Employee = require('./employee');

// create extension
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id , email)
        this.school = school;
    }
    getRole(){
        return 'Intern'
    } 
    getSchool(){
        return this.school
    }     
}

// export module
module.exports = Intern;

// test
const nIntern = new Intern('me', 1,' g@gmail' , 'GT')
console.log('---Intern---')
nIntern.getName()
nIntern.getId()
nIntern.getEmail()
console.log(nIntern.getRole())
console.log(nIntern.getSchool())