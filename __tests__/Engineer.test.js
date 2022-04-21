const Engineer = require('../lib/engineer')

describe('Intern', () => {
    describe('Initialization', () => {
      // Positive test
      it("creates an object with a name variable set to name", () => {
        // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const github= 'GT';
        // Act
        const obj = new Engineer(name, id, email, github);
  
        // Assert
        expect(obj.name).toEqual(name);
      });
      it("creates an object with a id variable set to id", () => {
          // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const github= 'GT';
        // Act
        const obj = new Engineer(name, id, email, github);
  
        // Assert
        expect(obj.id).toEqual(id);
      });  
      it("creates an object with a name variable set to name", () => {
          // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const github= 'GT';
        // Act
        const obj = new Engineer(name, id, email, github);
  
        // Assert
        expect(obj.email).toEqual(email);
      });  
      it("creates an object with a name variable set to name", () => {
          // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const github= 'GT';
        // Act
        const obj = new Engineer(name, id, email, github);
  
        // Assert
        expect(obj.github).toEqual(github);
      });  
      });

    });
  