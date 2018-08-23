let TV = require('./tv');

let tv = new TV();

let args = process.argv;
let action = args[2];
let name = args.slice(3).join(' ');

console.log(`User selected ${action}`);
console.log(`${name}`);

switch (action) {
  case 'show':
    console.log(`Whoop whoop its a show`);
    tv.findShow(name);
    break;

  case 'actor':
    console.log(`Lookie lookie`);
    tv.findActor(name);
    break;

  default:
    action = 'show';
    name = 'Queen of the South';
    tv.findShow(name);
    break;
}
