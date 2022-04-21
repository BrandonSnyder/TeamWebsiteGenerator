function generateHTML(data) {
    var team = '';
data.forEach(element => {
console.log('element.name' + element.name)
    switch(element.role){
        case 'Manager':
            let managerString = `
            <div id="cardContainer" class="card ">
                <div id='cardHead' class="cardHeader">
                    <h4 class="card-title">${element.name}</h4>
                    <h5 class="">${element.role}</h5>
                </div>
                <div id="cardBody" class="cardBody">
                    <ul  class="list-group">
                        <li class="bg-light border border-secondary list-group-item">ID: ${element.id}</li>
                        <li class="bg-light border border-secondary list-group-item">Email: ${element.email}</li>
                        <li class="bg-light border border-secondary list-group-item">Office Number:${element.officeNumber}</li>
                    </ul>
                </div>  
            </div>`
        team +=managerString;
        break;

        case 'Engineer':
            let engineerString= `
            <div id="cardContainer" class="card ">
                <div id='cardHead' class="cardHeader">
                    <h4 class="card-title">${element.name}</h4>
                    <h5 class="">${element.role}</h5>
                </div>
                <div id="cardBody" class="cardBody">
                    <ul  class="list-group">
                        <li class="bg-light border border-secondary list-group-item">ID: ${element.id}</li>
                        <li class="bg-light border border-secondary list-group-item">Email: ${element.email}</li>
                        <li class="bg-light border border-secondary list-group-item">Github: ${element.github}</li>
                    </ul>
                </div>  
            </div>`
        team +=engineerString;
        break;
        case 'Intern':
            let internString= `
            <div id="cardContainer" class="card ">
                <div id='cardHead' class="cardHeader">
                    <h4 class="card-title">${element.name}</h4>
                    <h5 class="">${element.role}</h5>
                </div>
                <div id="cardBody" class="cardBody">
                    <ul  class="list-group">
                        <li class="bg-light border border-secondary list-group-item">ID: ${element.id}</li>
                        <li class="bg-light border border-secondary list-group-item">Email: ${element.email}</li>
                        <li class="bg-light border border-secondary list-group-item">School: ${element.school}</li>
                    </ul>
                </div>  
            </div>`
        team +=internString;
        break;
    }
})

    console.log('=========this is the team section print=======')
    console.log(team)


    var htmlTemplate =  `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link rel="stylesheet" href="./styles.css">
      </head>
      <body>
      
          <div class="container">
              <h1>My Team</h1>
          </div>
          <div class="container1" >
            
             <!-- manager card (Use as template for other employees) -->
             ${team}                           
          </div>
      <script src="../index.js" ></script>
      </body>
      
      </html>`
// create a card and add it to template
return htmlTemplate
  }
  
  module.exports = generateHTML;
  