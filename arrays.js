let friends = ['Murphy', 'Tilden', 'LuRay', 'Sam'];
let ticket_prices = [50, 75, 66, 39];
let arrayOfBooleans = [true, false, true, false];

// this method determines whether an array includes a certain value 
//among its entries and returns true or false
friends.includes('Murphy'); // this prints true

// this method adds one or more elements to the end of array and 
//returns the new length of the array
ticket_prices.push(45); // this prints 5
console.log(ticket_prices); // updated array displays new element -- [ 50, 75, 66, 39, 45 ]
ticket_prices.push(55, 47); // can push more than one elements

// this method removes the first element from an array and retrurn that removed element. 
// this method also changes the length of the array
arrayOfBooleans.shift(); // removes the index[0] and returns false
console.log(arrayOfBooleans); // updated array [ false, true, false ]

// Understanding of index positions
// counting starts at 0
// friends variable: murphy is at index[0], tilden is at index[1], luRay is at index[2], Sam at index[3]
console.log(friends[0]); // prints Murphy
console.log(friends[1]); // prints Tilden
console.log(friends[2]); // prints LuRay
console.log(friends[3]); // prints Sam

// we can also use the indexOf() method to find the index at which a given element can be found
console.log(friends.indexOf('LuRay')); // prints 2
console.log(friends.indexOf('Sam')); // prints 3