var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("landing");
});



//show register form
router.get("/register", function(req, res) {
    res.render("register");
});

//handle signup logic
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
           req.flash("error", err.message);
           return res.redirect("back");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Wellcome to YelpCamp " + user.username);
            res.redirect("/campgrounds"); 
        });
    });
});

//show login form
router.get("/login", function(req, res) {
    res.render("login");
});

//handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }));
    

// handling logout logic
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged You Out!")
    res.redirect("/login");
});



module.exports = router;