
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;}
    // Methods per employee
    getName(){
        console.log(this.name)
    }
    getId(){
        console.log(this.id)
    }
    getEmail(){
        console.log(this.email)
    }
    getRole(){
        console.log(this.role)
    }
  }
  
  module.exports = Employee;