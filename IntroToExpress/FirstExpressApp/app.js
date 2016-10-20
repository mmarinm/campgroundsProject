var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("HI THERE!");
});

app.get("/bye", function (req, res) {
    res.send("Goodbye !");
});

app.get("*", function (req, res) {
    res.send("You are the star !");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED")
});