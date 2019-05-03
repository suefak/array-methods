var cars = ["camaro", "lexus"];
cars[1] = "bmw";
console.log(cars);
cars.push("wrangler");
cars.push("maxima");
cars.pop()

var cars2 = ["mercedes", "audi"];
cars2.push("porshe");
cars2.push("jeep");
cars2.shift();
cars2[2] = "bentley";
console.log(cars2);

var allCars = cars.concat(cars2); 
var carPrices = [27000, 60000, 40000, 50000, 90000, 2000000];
carPrices.push(30000);
var carsSold = [4,10,2,6,4,16];

for (var i = 0; i < allCars.length; i++) { 
     console.log("The total sales for",carsSold[i],allCars[i],"$", + carPrices[i] * carsSold[i]);
}