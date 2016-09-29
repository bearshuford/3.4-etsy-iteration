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
