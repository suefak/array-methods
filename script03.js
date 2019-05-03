var myName = "Sue";
var businessName = "Felicia's Fruit";
var motto = "Buy Felicia!"
var fruitNames = ["Apples","Oranges", "Peaches", "Plums" ];
var fruitPrices = [1.99, 2.99, 3.00, 4.99];
var fruitunitsSold = [5,7,3,4];
var fruitTotal = fruitPrices * fruitunitsSold;


for (var i = 0; i < 4; i++) { 
    fruitTotal= fruitPrices[i] * fruitunitsSold[i];
     console.log("The total cost for",fruitNames[i],(fruitunitsSold[i]),fruitTotal);
}
