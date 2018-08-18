var inquirer = require('inquirer');

function Player(name, position, offsense, defense, goodGame, badGame) {
  this.name = name;
  this.position = position;
  this.offsense = offsense;
  this.defense = defense;

  this.goodGame = function() {
    let flip = Math.floor(Math.random() * 2) == 0;
    console.log(`The coin flip was ${flip}`);
    if (flip == true && this.offsense < 9) {
      this.offsense++;
    } else if (this.offsense >= 9 && this.defense < 9) {
      this.defense++;
    }
    console.log('Good Game!');
  };

  this.badGame = function() {
    let flip = Math.floor(Math.random() * 2) == 0;
    console.log(`The coin flip was ${flip}`);
    if (flip == false && this.offsense >= 2) {
      this.offsense--;
    } else if (this.offsense >= 1 && this.defense >= 2) {
      this.defense--;
    }
    console.log('Better luck next time...');
  };
}

Player.prototype.printStats = function() {
  console.log(
    `Name: ${this.name}
    Position: ${this.position} 
    Offsense: ${this.offsense}
    Defense: ${this.defense}`
  );
};

let teamCount = 0;
let starters = [];
let subs = [];
let team = [];

function createPlayers() {
  if (teamCount < 3) {
    // Created a series of questions
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Player Name?'
        },

        {
          type: 'list',
          name: 'position',
          message: 'You can have 2 starters and 1 sub',
          choices: ['Starter', 'Sub']
        },

        {
          type: 'input',
          name: 'offense',
          message: 'What are is this players offense??'
        },

        {
          type: 'input',
          name: 'defense',
          message: 'What are is this players defense??'
        }
      ])
      .then(function(answers) {
        let newPlayer = new Player(
          answers.name,
          answers.position,
          answers.offsense,
          answers.defense
        );
        team.push(newPlayer);

        teamCount++;

        createPlayers();
      });
  }
}

createPlayers();

console.log(team);
