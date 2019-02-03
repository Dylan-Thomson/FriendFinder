const path = require("path");
module.exports = (() => {
    const htmlRoutes = require("express").Router();

    htmlRoutes.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "home.html"));
    });

    htmlRoutes.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public/survey.html"));
    });

    return htmlRoutes;
})();