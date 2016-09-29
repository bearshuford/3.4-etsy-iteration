//////////
// ONE
// average price of all items
/////////////
var prices = items.map(function(obj) {
   return obj.price;
}); // map array of item prices

var sum = prices.reduce(function(total,current) {
   return total+current;
}); // reduce array to sum

var avg = (sum/items.length).toFixed(2);  // calculate average to hundredths
console.log('The average price is $', avg);

/////////
// TWO
// array of items that cost b/w $14.00 & $18.00
////////////////
var twoArray = items.filter(function(obj) {
   return (obj.price > 14 && obj.price < 18);
}); // filter by price criteria
console.log("Items that cost between $14.00 USD and $18.00 USD:", twoArray);


/////////
// THREE
// item with a GBP currency code
////////////////
var gbp = items.filter(function(obj) {
   return obj.currency_code === "GBP";
});
console.log(gbp[0].title+" costs £"+gbp[0].price);

/////////
// FOUR
// items made of wood
////////////////
var woodItems = items.filter(function(obj) {
   return obj.materials.includes('wood');
});

woodItems.forEach(function(obj){
   console.log(obj.title);
});
