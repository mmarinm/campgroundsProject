var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var CatSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", CatSchema);

//adding a new cat to the DB

// var george = new Cat({
//     name: "Mrs Noris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//   if(err){
//       console.log("Something Went Wrong!");
//   }
//   else{
//             console.log("We just saved the cat to db!");
//             console.log(cat);
//   }
// });

Cat.create({
    name:"Snow White",
    age: 15,
    temperament: "Nice"
}, function(err, cat){
    if(err){
        console.log(err);
    } 
    else{
        console.log(cat);
    }
    });

//retrive all cats from database
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no error!");
        console.log(err);
    }
    else{
        console.log("All the cats...");
        console.log(cats);
    }
});