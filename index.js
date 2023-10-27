//Declaring fs and downloading inquirer and the version 8.2.4
const inquirer = require('inquirer');
const fs = require('fs');

//Function that contains a readme model that includes the answers by the user.
function generateMarkdown (answers) {
    return `

    //text logo
    ${answers.text}
    
    //text color
    ${answers.textColor}
    
    //shape color
    ${answers.shapeColor}
    
    //shape type
    ${answers.shape}
    `;
  }
  
  //Using prompt the user will answer all the questions that will be included inside the readme file. 
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Please write a text for your logo (Max 3 characters)',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Write a text color for your logo',
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Write a shape color for your logo',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to your logo?',
        choices:['square','triangle','circle'],
      },
    ])
  
  //This then generates a readme file in another folder.This then connects the user answers and the readme model (inquierer).
    .then((answers) => {
      const svsLogo = generateMarkdown(answers);
      fs.writeFile('./lib/  ', svsLogo, (err) =>
        err ? console.log(err) : console.log('Successfully created logo svg!')
      );
    });
  
  
  
