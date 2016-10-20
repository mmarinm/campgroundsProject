var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Curabitur in lacus fermentum, tincidunt nisi sed, cursus velit. Nullam egestas purus turpis, sed convallis elit ultrices non. Praesent felis nunc, elementum et quam a, auctor vestibulum magna. Fusce sed aliquet eros. Morbi suscipit accumsan fermentum. Ut sodales, nibh in rhoncus ultricies, sem arcu malesuada libero, non ullamcorper ex diam ac massa. Integer diam neque, dapibus sed purus eget, semper cursus leo. Mauris vel sem non ex posuere tempor. Nullam porta justo non ipsum laoreet accumsan. Aliquam iaculis sem laoreet ex pretium, ac fermentum mi lobortis. In consequat iaculis felis sit amet molestie. Sed vitae nisi lorem. Phasellus dolor libero, volutpat id imperdiet vel, viverra tempor quam. Sed at metus placerat, pulvinar sem quis, vestibulum leo. Fusce ac suscipit ipsum. Curabitur at semper orci."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Curabitur in lacus fermentum, tincidunt nisi sed, cursus velit. Nullam egestas purus turpis, sed convallis elit ultrices non. Praesent felis nunc, elementum et quam a, auctor vestibulum magna. Fusce sed aliquet eros. Morbi suscipit accumsan fermentum. Ut sodales, nibh in rhoncus ultricies, sem arcu malesuada libero, non ullamcorper ex diam ac massa. Integer diam neque, dapibus sed purus eget, semper cursus leo. Mauris vel sem non ex posuere tempor. Nullam porta justo non ipsum laoreet accumsan. Aliquam iaculis sem laoreet ex pretium, ac fermentum mi lobortis. In consequat iaculis felis sit amet molestie. Sed vitae nisi lorem. Phasellus dolor libero, volutpat id imperdiet vel, viverra tempor quam. Sed at metus placerat, pulvinar sem quis, vestibulum leo. Fusce ac suscipit ipsum. Curabitur at semper orci."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Curabitur in lacus fermentum, tincidunt nisi sed, cursus velit. Nullam egestas purus turpis, sed convallis elit ultrices non. Praesent felis nunc, elementum et quam a, auctor vestibulum magna. Fusce sed aliquet eros. Morbi suscipit accumsan fermentum. Ut sodales, nibh in rhoncus ultricies, sem arcu malesuada libero, non ullamcorper ex diam ac massa. Integer diam neque, dapibus sed purus eget, semper cursus leo. Mauris vel sem non ex posuere tempor. Nullam porta justo non ipsum laoreet accumsan. Aliquam iaculis sem laoreet ex pretium, ac fermentum mi lobortis. In consequat iaculis felis sit amet molestie. Sed vitae nisi lorem. Phasellus dolor libero, volutpat id imperdiet vel, viverra tempor quam. Sed at metus placerat, pulvinar sem quis, vestibulum leo. Fusce ac suscipit ipsum. Curabitur at semper orci."
    }
];


function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
    //     // add a few campgrounds
    //     data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err){
    //                 console.log(err);
    //             } else {
    //                 console.log("added a campground");
    //                 // create a comment
    //                 Comment.create(
    //                     {
    //                         text: "This place is great, but I wish there was internet",
    //                         author: "Homer"
    //                     }, function(err, comment){
    //                         if(err){
    //                             console.log(err);
    //                         } else {
    //                             campground.comments.push(comment);
    //                             campground.save();
    //                             console.log("Created new comment");
    //                         }
    //                     });
                        
    //             }
    //         });
    //     });
    }); 
}

module.exports = seedDB;
