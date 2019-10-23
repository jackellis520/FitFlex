var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("index", {
                msg: "Welcome!",
                examples: dbExamples
            });
        });
    });
};

app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
        dbExample
    ) {
        res.render("example", {
            example:dbExample
        });
    });
});

app.get("*", function(req, res) {
    res.render("404");
});
