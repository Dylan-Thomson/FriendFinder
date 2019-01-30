const friends = require("../data/friends");

module.exports = (() => {
    "use strict";
    const apiRoutes = require("express").Router();

    apiRoutes.get("/api/friends", (req, res) => {
        return res.json(friends);
    });

    //POST ROUTE

    return apiRoutes;
})();