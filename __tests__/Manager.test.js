const Manager = require('../lib/manager')

describe('Manager', () => {
    describe('Initialization', () => {
      // Positive test
      it("creates an object with a name variable set to name", () => {
        // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const officeNumber= 101;
        // Act
        const obj = new Manager(name, id, email, officeNumber);
  
        // Assert
        expect(obj.name).toEqual(name);
      });
      it("creates an object with a id variable set to id", () => {
        // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const officeNumber= 101;
        // Act
        const obj = new Manager(name, id, email, officeNumber);
  
        // Assert
        expect(obj.id).toEqual(id);
      });  
      it("creates an object with a name variable set to name", () => {
        // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const officeNumber= 101;
        // Act
        const obj = new Manager(name, id, email, officeNumber);
  
        // Assert
        expect(obj.email).toEqual(email);
      });  
      it("creates an object with a name variable set to name", () => {
        // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const officeNumber= 101;
        // Act
        const obj = new Manager(name, id, email, officeNumber);
  
        // Assert
        expect(obj.officeNumber).toEqual(officeNumber);
      });  
      });

    });
  