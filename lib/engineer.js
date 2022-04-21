// call in Employee
const Employee = require('./employee');

// create extension
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id , email)
        this.github = github;
    }
    getRole(){
        return 'Engineer'
    } 
    getGithub(){
        return this.github
    }     
}
// export module
module.exports = Engineer;

// test
const nEngineer = new Engineer('me', 1,' g@gmail' , 'brnadonsnyder')
console.log('---engineer---')
nEngineer.getName()
nEngineer.getId()
nEngineer.getEmail()
console.log(nEngineer.getRole())
console.log(nEngineer.getGithub())
