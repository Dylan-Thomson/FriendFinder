// HTML ROUTES HERE
const path = require("path");
module.exports = (() => {
    'use strict';
    const htmlRoutes = require("express").Router();

    htmlRoutes.get("/", (req, res) => {
        
        res.sendFile(path.join(__dirname, "..", "public", "home.html"));
        // res.render(path.join(__dirname, "..", "public/home"));
        // res.sendFile(path.join(__dirname, "..", "/public"));
        // res.sendFile(path.join(__dirname, "..", "public/script."));
    });

    htmlRoutes.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public/survey.html"));
    });

    return htmlRoutes;
})();