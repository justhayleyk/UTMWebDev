// Hayley's Initialized Firebase
var config = {
  apiKey: 'AIzaSyBuHKTX1adCU_vj6qGbebQlwVkDESG11Io',
  authDomain: 'my-awesome-project1-40061.firebaseapp.com',
  databaseURL: 'https://my-awesome-project1-40061.firebaseio.com',
  projectId: 'my-awesome-project1-40061',
  storageBucket: 'my-awesome-project1-40061.appspot.com',
  messagingSenderId: '551060661624'
};

firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

var database = firebase.database();

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on(
  'value',
  function(snapshot) {
    console.log(snapshot.val());
  },
  // If any errors are experienced, log them to console.
  function(errorObject) {
    console.log('The read failed: ' + errorObject.code);
  }
);

// Print the initial data to the console.
console.log('Initial Value: ' + initialValue);

// Change the html to reflect the initial value.
$('#click-value').text(initialValue);

// Change the clickCounter to match the data in the database
database.ref().set({
  clickCount: clickCounter
});

// Log the value of the clickCounter

console.log('Click Value: ' + clickCounter);

// Change the HTML Value

database.ref().on(
  'value',
  function(snapshot) {
    $('#click-value').text(snapshot.val().clickCount);
    clickCounter = snapshot.val().clickCount;
  },
  function(errorObject) {
    console.log('The read failed: ' + errorObject.code);
  }
);

// --------------------------------------------------------------

// Whenever a user clicks the click button
$('#click-button').on('click', function() {
  // Reduce the clickCounter by 1
  clickCounter--;
  // Alert User and reset the counter
  if (clickCounter === 0) {
    alert('You have reached ZERO');
  }
  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });
  // Log the value of clickCounter
  console.log(clickCounter);
});

// Whenever a user clicks the restart button
$('#restart-button').on('click', function() {
  // Set the clickCounter back to initialValue
  initialValue = 100;
  // Save new value to Firebase
  database.ref().set({
    clickCount: initialValue
  });
  // Log the value of clickCounter
  console.log(clickCounter);
  // Change the HTML Values
  $('#click-value').text(clickCounter);
});
