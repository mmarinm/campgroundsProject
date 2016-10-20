var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/yelp_camp");    
app.use(bodyParser.urlencoded({exteded: true}));    
app.set("view engine", "ejs");

// SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Boran Goran",
//         image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
//         description: "This is some description of the venue"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Newly created Campground");
//             console.log(campground);
//         }
//     });



// var campgrounds = [
//         {name: "Roki Rokija" , image: "https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
//         {name: "Boran Goran" , image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
//         {name: "Zoran Tuljan" , image: "https://farm8.staticflickr.com/7140/7873587008_0f9e2a3a9e.jpg"},
//     ];


app.get("/", function (req, res) {
    res.render("lending");
});

// INDEX route --- show all campgrounds
app.get("/campgrounds", function (req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("index", {campgrounds: allcampgrounds});
        }
    });
    
});

//CREATE route --- add new campground to DB
app.post("/campgrounds",function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    // Create a new Campground and save it to the DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            res.render("new");
        }
        else{
            res.redirect("/campgrounds");
        }
    });
});

//NEW route --- shows form to create new campground
app.get("/campgrounds/new", function (req, res) {
    //url for the form
    res.render("new");
});



app.get("/campgrounds/:id", function(req, res) {
    //find a campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            res.render("show", {campground:foundCampground});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
});
