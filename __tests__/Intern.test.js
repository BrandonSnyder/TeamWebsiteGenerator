const Intern = require('../lib/intern')

describe('Intern', () => {
    describe('Initialization', () => {
      // Positive test
      it("creates an object with a name variable set to name", () => {
        // Arrange
        const name = 'brad';
        const id = 1;
        const email= 'brad@gmail';
        const school= 'GT';
        // Act
        const obj = new Intern(name, id, email, school);
  
        // Assert
        expect(obj.name).toEqual(name);
      });
      it("creates an object with a id variable set to id", () => {
         // Arrange
         const name = 'brad';
         const id = 1;
         const email= 'brad@gmail';
         const school= 'GT';
         // Act
         const obj = new Intern(name, id, email, school);
  
        // Assert
        expect(obj.id).toEqual(id);
      });  
      it("creates an object with a name variable set to name", () => {
         // Arrange
         const name = 'brad';
         const id = 1;
         const email= 'brad@gmail';
         const school= 'GT';
         // Act
         const obj = new Intern(name, id, email, school);
  
        // Assert
        expect(obj.email).toEqual(email);
      });  
      it("creates an object with a name variable set to name", () => {
         // Arrange
         const name = 'brad';
         const id = 1;
         const email= 'brad@gmail';
         const school= 'GT';
         // Act
         const obj = new Intern(name, id, email, school);
  
        // Assert
        expect(obj.school).toEqual(school);
      });  
      });

    });
  