const friends = require("../data/friends");

module.exports = (() => {
    "use strict";
    const apiRoutes = require("express").Router();

    apiRoutes.get("/friends", (req, res) => {
        return res.json(friends);
    });

    //POST ROUTE
    apiRoutes.post("/friends", (req, res) => {
        friends.push(req.body);
        res.json(req.body);
    });

    return apiRoutes;
})();