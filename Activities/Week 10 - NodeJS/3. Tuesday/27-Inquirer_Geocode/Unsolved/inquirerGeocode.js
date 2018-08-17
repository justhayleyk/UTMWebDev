// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var inquirer = require('inquirer');
var geocoder = require('geocoder');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'firstname'
    },
    {
      type: 'input',
      message: 'What address are you looking up?',
      name: 'address'
    }
  ])
  .then(user => {
    console.log(`Its nice to meet you ${user.firstname}`);
    geocoder.geocode(user.address, function(err, data) {
      console.log(JSON.stringify(data.geometry, null, 2));
    });
  });
