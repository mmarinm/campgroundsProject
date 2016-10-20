var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Tony", "Miranda", "Lily", "Justin", "Pierre"];

app.use(bodyParser.urlencoded({exteded: true})); //activating function of body parser package
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function (req, res) {
    
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED");
});
