//  include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateHTML = require('./src/generateHTML')


var i = 1
// questions for manage
const managerQuestions = [
    {
      type: 'input',
      message: 'What is the name of the manager?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'What is the managers email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the managers office number',
        name: 'officeNumber',
      }]
// questions for engineer
const engineerQuestions = [
    {
      type: 'input',
      message: 'What is the name of this Engineer?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'What is the engineers email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the engineer\'s github username',
        name: 'github',
      }]
// questions for intern
const internQuestions = [
    {
      type: 'input',
      message: 'What is the name of this Intern?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'What is the intern\'s email?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Where does the intern go to school?',
        name: 'school',
      }]

const storageArray = []

const anotherEmployee = [
  {
    type: 'list',
    message: 'Would you like to hire another another employee?',
    name: 'name',
    choices:['Yes','No']
  }]

const nextEmployee= [ {
    type: 'list',
    message: 'Would you like to add an Engineer or an Intern?',
    name: 'name',
    choices:['Engineer','Intern']
  }
  ]

// functions to prompt for new employees
const createManager = () => {
  
  inquirer.prompt(managerQuestions)
    .then((response) =>{
        console.log(response)
        let tempArray = {
            'name': response.name,
            'id': i,
            'email': response.email,
            'officeNumber':response.officeNumber,
            'role':"Manager"
    }
    storageArray.push(tempArray)
    selectEmployeeType()

})}
const createEngineer = () => {
  inquirer.prompt(engineerQuestions)
    .then((response) =>{
        console.log(response)
        let tempArray = {
            'name': response.name,
            'id': i,
            'email': response.email,
            'github':response.github,
            'role':"Engineer"
    }
    storageArray.push(tempArray)
    selectEmployeeType()
})}
const createIntern = () => {
  inquirer.prompt(internQuestions)
    .then((response) =>{
        console.log(response)
        let  tempArray = {
            'name': response.name,
            'id': i,
            'email': response.email,
            'school':response.school,
            'role':"Intern"
    }
    storageArray.push(tempArray)
    console.log(storageArray)
    selectEmployeeType()
})}

const selectEmployeeType = () => {
  inquirer.prompt(anotherEmployee)

  .then((response) => {

    if(response.name == 'Yes'){
      i++;
      inquirer.prompt(nextEmployee)
      .then((response)=>{
        if(response.name=="Engineer"){
          console.log('test')
          createEngineer()
        }else{
          console.log('intern')
          createIntern()
        }

      })
    }else{
      console.log('The program has terminated. Your team has been chosen.')
      console.log(storageArray)
      //send to func to append info to page. 
      var tempString = generateHTML(storageArray)
      fs.writeFileSync('./dist/index.html',tempString)
    }    
  })
}


// start with prompt for manager then continues to add engineer or intern until elected to stop.
function init (){
  createManager()
     // Checked SAT up to this point 
    // selecting more employees were made in the above functions
    // storageArray is the array that stores all data
}
init()
