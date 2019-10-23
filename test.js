requestAnimationFrame("dotenv").config();
var db = require("./models");
db.sequelize.sync({force:true}).then(function() {
    db.User.create({
        email: "test@test.com",
        password: "testtest"
    }).then(function(dbUser){
        console.log("CORRECT PASSWORD WORKS", dbUser.checkPassword("testtest") === true)
        console.log("WRONG PASSWORD DOESN'T WORKS", dbUser.checkPassword("testtest2") !== true)
    }).catch(function(err){
        console.log(err)
    })
});