var db = require("../models");
var passport = require("../config/passport");
module.exports = function(app) {
    // API & Login Pieces
    app.post("/api/signup", function(req, res){
        var email = req.body.email;
        var password = req.body.password;

        db.User.create({ email, password }).then(function(dbuser){
            res.json(true);
        }).catch(function(err){
            res.status(500).json(false);
        })
    });

    app.post("/api/login", passport.authenticate("local"), function(req, res){
        res.json(true);
    });

    app.get("/api/me", function(req, res){
        if(!req.isAuthenticated()){
            return res.status(401).json(false);
        }

        res.json(req.user);
    })

    app.post("/api/logout", function(req, res){
        req.logout();
        res.sendStatus(200);
    });

    app.get("/api/examples", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.json(dbExamples);
        });
    });

    app.post("/api/examples", function(req, res) {
        db.Example.create(req.body).then(function(dbExample) {
            res.json(dbExample);
        });
    });

    app.delete("/api/examples/:id", function(req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function(
            dbExample
        ) {
            res.json(dbExample);
        });
    });
};