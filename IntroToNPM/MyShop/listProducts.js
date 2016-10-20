var faker = require('faker');
console.log("///////////////////////////////////////////////////////////")
console.log("WELCOME TO MY SHOP!")
console.log("///////////////////////////////////////////////////////////")

var i = 10
while (i > 0){
    i--;
    var newProduct = faker.commerce.productName() + " - " + "$"+faker.commerce.price();
    console.log(newProduct)
};