

const {mongerInventory} = require("./fishingmonger.js)
/*
ENGLISH:

we will need to inporting the fishmonger function to be used in the resturant
each day will have diffrent max price requirements:
-day 1 can spend 5 per fish
-day 2 is 7
-day 3 is 4

Chef Purchasing Constraints:

The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. For example, a chef can tell the monger that she can only spend $5.00 per fish. The function should then return only fish that cost $5.00 or less. This could be any amount and will be information that will be provided to the monger inventory function.

From your array of purchased fish, you must filter that down to the fish that meet the price constraint of the restaurant chef.

Once you have that final array of fish, return that array.

This price must be passed as an argument to the fishMenu function so that it can be passed along to the fishmonger function when the chef buys the fish.
If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory. This constraint will require you to update your fish monger logic!
The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich.
function fish menu should return the given HTML string and should build a HTML version of the menu




Code english

taking fishmonger function and passing in the price as paramiter this should give an array
then the chef looks through the array for price ex(<=$5), total monger inventory amount,

if the monger has a fishtype (ex tuna) at <=$5 
then buy 50% of the total amount of that fish type held by monger
return the name of the fish and return 3 diffrent meal types with that fish name (ex tuna soup)

export {fishMenu};
*/



