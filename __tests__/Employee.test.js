const Employee = require("../lib/employee");

describe('Employee', () => {
    describe('Initialization', () => {
      // Positive test
      // test name
      it("Should create an object with a variable called name that stores employees name", () => {
        // Arrange
        const name = 'Brandon'; 
        const id = 2; 
        const email = 'brandon.snyder@gmail.com';  
        // Act
        const obj = new Employee(name, id, email);
        // Assert
        expect(obj.name).toEqual(name);
      });
      // test ID
      it("Should create an object with a variable called id that stores employees id", () => {
        // Arrange
        const name = 'Brandon'; 
        const id = 2; 
        const email = 'brandon.snyder@gmail.com';  
        // Act
        const obj = new Employee(name, id, email);
        // Assert
        expect(obj.id).toEqual(id);
      });
      // test email
      it("Should create an object with a variable called id that stores employees id", () => {
        // Arrange
        const name = 'Brandon'; 
        const id = 2; 
        const email = 'brandon.snyder@gmail.com';  
        // Act
        const obj = new Employee(name, id, email);
        // Assert
        expect(obj.email).toEqual(email);
      });

    });


  });