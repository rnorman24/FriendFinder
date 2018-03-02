// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friendData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Convert each user's results into a simple array of numbers
    // console.log(req.body.scores.map(Number));
    req.body.scores = req.body.scores.map(Number);

    let curSum = 50;
    let nameMatch;
    let photoMatch;
    let m = 0;
    for (let j = 0; j < friendData.length; j++) {
      let totalSum = 0;
      for (let i = 0; i < 10; i++) {
        sum = Math.abs(req.body.scores[i] - friendData[j].scores[i]);
        
        totalSum = sum + totalSum;
        
      }
      console.log(totalSum);
      if (totalSum < curSum) {
        curSum = totalSum;
        friendData[m] = friendData[j];
      }
    }
    
    res.json(friendData[m]);
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    friendData.push(req.body);
  });

  // ---------------------------------------------------------------------------
  // The code below clears out the table while working with the functionality.

  app.post("/api/clear", function() {
    // Empty out the array of data
    friendData = [];
    
    console.log(friendData);
  });
};
