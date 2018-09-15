// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(.create-form).submit(function (event) {
    event.preventDefault();

    let newQuote = {
      author: $("#auth").val().trim(),
      quote: $("#quo").val().trim()
    }

    // Send the POST request.
    $.ajax("/api/quotes", {
      type: "POST",
      data: newQuote
    }).then(
      function() {
        console.log("created new quote");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  
  })

});
