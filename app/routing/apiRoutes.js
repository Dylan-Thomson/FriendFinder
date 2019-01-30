const friends = require("../data/friends");

module.exports = (() => {
    "use strict";
    const apiRoutes = require("express").Router();

    apiRoutes.get("/friends", (req, res) => {
        return res.json(friends);
    });

    //POST ROUTE
    apiRoutes.post("/friends", (req, res) => {
        const userScores = req.body.scores;

        // Store current best match and difference
        let bestMatch;
        let smallestDifference;

        friends.forEach(friend => {
            const friendScores = friend.scores;
            const differences = [];

            // Calculate difference for each score
            for(let i = 0; i < userScores.length; i++) {
                differences.push(Math.abs(userScores[i] - friendScores[i]));
            }

            // Sum total difference
            const result = differences.reduce((acc, curr) => {
                return acc + curr;
            }, 0);

            // Set best match to this if nothing is set yet
            if(!bestMatch) {
                bestMatch = friend;
                smallestDifference = result;
            }
            // Update best match
            else if(result < smallestDifference) {
                bestMatch = friend;
                smallestDifference = result;
            }
            console.log(friend.name, friendScores, userScores, differences, result);
        });

        // Push user to friends and send best match
        friends.push(req.body);
        res.json(bestMatch);
    });

    return apiRoutes;
})();
