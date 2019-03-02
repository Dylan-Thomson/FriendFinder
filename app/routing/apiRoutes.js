const friends = require('../data/friends');

module.exports = (() => {
  const apiRoutes = require('express').Router();
  // GET ROUTE
  apiRoutes.get('/friends', (req, res) => res.json(friends));

  // POST ROUTE
  apiRoutes.post('/friends', (req, res) => {
    // Convert scores to Number types before pushing them
    req.body.scores = req.body.scores.map(score => Number(score));

    // Store current best match and difference
    const bestMatch = calculateBestMatch(req.body.scores);

    // Push user to friends and send best match to client
    friends.push(req.body);
    res.json(bestMatch);
  });

  return apiRoutes;
})();

function calculateBestMatch(userScores) {
  let bestMatch;
  let smallestDifference;

  friends.forEach((friend) => {
    const friendScores = friend.scores;
    const differences = [];

    // Calculate difference for each score and push to differences array
    for (let i = 0; i < userScores.length; i++) {
      differences.push(Math.abs(userScores[i] - friendScores[i]));
    }

    // Sum total difference
    const result = differences.reduce((acc, curr) => acc + curr, 0);

    // Set best match
    if (!bestMatch) {
      // Set best match to current if none set yet
      bestMatch = friend;
      smallestDifference = result;
    } else if (result < smallestDifference) {
      // Update best match when a better match is found
      bestMatch = friend;
      smallestDifference = result;
    }
  });
  return bestMatch;
}
