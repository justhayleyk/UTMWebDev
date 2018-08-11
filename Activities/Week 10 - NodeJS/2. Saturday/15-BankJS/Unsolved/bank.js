const fs = require('fs');

fs.readFile('bank.txt', 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  }

  const bnkAction = process.argv[2];
  const amount = process.argv[3];

  switch (bnkAction) {
    case 'total':
      bankTotal();
      break;

    case 'deposit':
      deposit();
      break;

    case 'withdraw':
      withdraw();
      break;
  }
});

function bankTotal() {
  fs.readFile('bank.txt', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    }

    let numbers = data.split(',');
    let balance = numbers.map(Number);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    console.log('Your bank balance is: ' + balance.reduce(reducer));
  });
}

function deposit() {
  const amount = ', ' + process.argv[3];

  fs.appendFile('bank.txt', amount, function(err, data) {
    if (err) {
      console.log(err);
    }
    console.log('Your deposited: ' + amount);
  });
}

function withdraw() {
  const amount = ', -' + process.argv[3];
  const withdrawn = process.argv[3];
  fs.appendFile('bank.txt', amount, function(err, data) {
    if (err) {
      console.log(err);
    }
    console.log('Your withdrew: ' + withdrawn);
  });
}
