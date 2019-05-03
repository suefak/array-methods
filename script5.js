var fruits1 = ["apples", "peaches"];

console.log(fruits1);
fruits1[1] = "Strawberries";
console.log(fruits1);
fruits1.push("Pumpkin");
console.log(fruits1)
fruits1.push("Peppers");
fruits1.pop()

var fruits2 = ["kiwi", "oranges"];
fruits2.push("sumo oranges");
fruits2.push("grapes");
fruits2.shift();
fruits2[2] = "eggplants";
console.log("f2f2f2f2f2f2", fruits2)

var allFruits = fruits1.concat(fruits2); 
console.log("---", allFruits);
var fruitPrices = [1, 1.5, 2, 2.5, 3, 3.5];
fruitPrices.push(4);
var fruitsSold = [4,10,2,6,4,16];



for (var i = 0; i < allFruits.length; i++) { 
     console.log("The total sales for",fruitsSold[i],allFruits[i],"$", + fruitPrices[i] * fruitsSold[i]);
}

