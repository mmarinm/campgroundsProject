var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
        {name: "Roki Rokija" , image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
        {name: "Boran Goran" , image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
        {name: "Zoran Tuljan" , image: "https://farm8.staticflickr.com/7140/7873587008_0f9e2a3a9e.jpg"},
    ];
    
app.use(bodyParser.urlencoded({exteded: true}));    
app.set("view engine", "ejs");


app.get("/campgrounds", function (req, res) {
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds",function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    
    //redirect back to campground page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    //url for the form
    res.render("new")
});

app.get("/", function (req, res) {
    res.render("lending");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
});
