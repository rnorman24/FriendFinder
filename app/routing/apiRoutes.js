// ===============================================================================
// LOAD DATA
// Linking data route to a "data" source.
// This data source holds an array of information on friendData
// ===============================================================================

const friendData = require("../data/friendData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Request
  // Below code handles when users "visit" a page.
  // In the below case when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST Request
  // Below code handles when a user submits a form and thus submits data to the server.
  // In the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey request... this data is then sent to the server...
  // Then the server saves the data to the friendData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Convert each user's results into a simple array of numbers
    req.body.scores = req.body.scores.map(Number);
    
    let currentDifference = 50;
    let m;
    for (let j = 0; j < friendData.length; j++) {
      let totalDifference = 0;
      for (let i = 0; i < 10; i++) {
        difference = Math.abs(req.body.scores[i] - friendData[j].scores[i]);
        totalDifference = difference + totalDifference;
      }
      console.log(totalDifference);
      // Compare to find lowest sum
      if (totalDifference < currentDifference) {
        currentDifference = totalDifference;
        friendData[m] = friendData[j];
      }
    }
    // The "server" will respond to requests and let users know the best match.
    // It will do this by sending out the value of friendData[m]
    res.json(friendData[m]);
    // friends API will be appended using .push with req.body
    // since we're using the body-parser middleware
    friendData.push(req.body);
  });
};
