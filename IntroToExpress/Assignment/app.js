var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there welcome to my assignment!");
});

app.get("/speak/:animalName", function (req, res) {
    var animal = req.params.animalName;
    var sound = "whatever sound";
    if(animal=== "pig" || animal === "Pig" || animal === "PIG"){
        sound = "Oink!";
    }
    else if(animal === "cow" || animal === "Cow" || animal === "COW"){
        sound = "Mooo!";
    }
    else if(animal === "dog"  || animal === "Dog" || animal === "DOG"){
        sound = "Woof Woof";
    }
    res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:intro/:num", function (req, res) {
    var intro = req.params.intro;
    var num = Number(req.params.num);
    var result = "";
    for(var i = 0; i < num; i++){
        result += intro + " ";
    }
    res.send(result);
    
});

app.get("*", function (req, res) {
    res.send("Sorry page not found, what are you doing with your life?");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER HAS STARTED")
});