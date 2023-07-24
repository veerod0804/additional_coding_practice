// You will be given an array of drinks, with each drink being an object with two properties: name and price. 
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

let drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10},
  {name: "soda", price: 100},
]


// The output of the sorted drinks object will be:

// Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function sortDrinks(drinks) {
    let sortedDrinks = [];

    for (let i = 0; i < drinks.length; i++) {
        if (drinks[i].price <= drinks[0].price) {
            sortedDrinks.unshift(drinks[i])
        } else if (drinks[i].price > drinks[0].price) {
            sortedDrinks.push(drinks[i]);
        }
}
return sortedDrinks;
}
console.log(sortDrinks(drinks));