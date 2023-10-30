const inquirer = require("inquirer");
const fs = require("fs");
const {Square, Circle, Triangle} = require("./lib/shapes");

//GenerateSVG generates a svg logo based in user answers using inquirer
function generateSVG(answers) {

  //logoSvgString using svg code it's connected with prompt and will contain the final svg string on line 23 
  logoSvgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>';

  //shapeResult will be generated depending of shape color options by the user. They are three options: triangle,square or circle.
  let shapeResult;
  if (answers.shape === "Triangle") {
    shapeResult = new Triangle();
    logoSvgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeResult = new Square();
    logoSvgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
  } else {
    shapeResult = new Circle();
    logoSvgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
  }
  logoSvgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text></g></svg>`;
}

//Using prompt the user will answer all the questions that will be included inside the logo svg. 
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
      type: 'list',
      name: 'shape',
      message: 'What shape would you like to your logo?',
      choices:['Square','Triangle','Circle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Write a shape color for your logo',
    },
  ])

  //This then connects user answers and the final svg string that generates a svg file in another folder
  .then((answers) => {
    if (answers.text.length > 3) {
      console.log("Please your text logo must contain max 3 characters!");
    }else {
      const readmeFile = generateSVG(answers);
      fs.writeFile('./examples/logo.svg', logoSvgString, readmeFile, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg!");
      });
    }
  });

