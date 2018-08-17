// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ====================================================================

var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username'
    },
    {
      type: 'password',
      message: 'Please set a password?',
      name: 'password'
    },
    {
      type: 'confirm',
      message: 'Are you sure you are happy with your password?',
      name: 'confirm',
      default: true
    },
    {
      type: 'list',
      message: 'Which movie do you like best?',
      choices: ['Iron Man', 'Thor', 'Batman vs Superman'],
      name: 'movies'
    },
    {
      type: 'checkbox',
      message: 'Do you like cats or dogs?',
      choices: ['cat', 'dog'],
      name: 'catsDogs'
    }
  ])
  .then(user => {
    console.log(`Its nice to meet you ${user.username}`);
    return console.log(`Wicked`);
  });
