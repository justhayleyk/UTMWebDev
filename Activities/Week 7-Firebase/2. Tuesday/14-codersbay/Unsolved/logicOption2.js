// Initialize Firebase

var config = {
  apiKey: 'AIzaSyAMI_nl3Kh5T5XrqNoccJT3RrTzWnEbGQo',
  authDomain: 'coderbay-e073c.firebaseapp.com',
  databaseURL: 'https://coderbay-e073c.firebaseio.com',
  projectId: 'coderbay-e073c',
  storageBucket: '',
  messagingSenderId: '439082698298'
};

firebase.initializeApp(config);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Assign the reference to the database to a variable named 'database'
// var database = ...

var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = 'No one :-(';
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.

database.ref().on(
  'value',
  function(snapshot) {
    // If Firebase has a highPrice and highBidder stored (first case)
    if (
      snapshot.child('highBidder').exists() &&
      snapshot.child('highPrice').exists()
    ) {
      // Set the variables for highBidder/highPrice equal to the stored values in firebase.
      // highPrice = ...
      highBidder = snapshot.val().highBidder;

      // highBidder = ...
      highPrice = parseInt(snapshot.val().highPrice);

      // Change the HTML to reflect the stored values
      $('highest-bidder').text(highBidder);
      $('highest-price').text(highPrice);

      // Print the data to the console.
      console.log(highBidder);
      console.log(highPrice);
    }

    // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
    else {
      // Change the HTML to reflect the initial values
      $('highest-bidder').text(initialBidder);
      $('highest-price').text(initialBid);
      // Print the data to the console.
    }

    // If any errors are experienced, log them to console.
  },
  function(errorObject) {
    console.log('The read failed: ' + errorObject.code);
  }
);

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button

$('#submit-bid').on('click', function() {
  // prevent form from submitting with event.preventDefault() or returning false
  event.preventDefault();
  // Get the input values
  var bidderName = $('#bidder-name').val();
  var bidderPrice = parseInt(
    $('#bidder-price')
      .val()
      .trim()
  );

  // Log the Bidder and Price (Even if not the highest)
  console.log('Current Bidders name: ' + bidderName);
  console.log('Current Bidders price: ' + bidderPrice);

  // If Then statements to compare against previous high bidder

  if (bidderPrice > highPrice) {
    // Alert that they are High Bidder
    alert('Congrats your the highest bidder!');
    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });
    // Log the new High Price
    console.log(highPrice);
    // Store the new high price and bidder name as a local variable (could have also used the firebase variable)
    localStorage.clear();
    localStorage.setItem('highBidder', bidderName);
    localStorage.setItem('highPrice', bidderPrice);

    // Change the HTML to reflect the new high price and bidder
    $('highest-bidder').text(bidderName);
    $('highest-price').text(bidderPrice);
  }

  // Else tell user their bid was too low via alert
  else alert('Your bid is too low...');
});
