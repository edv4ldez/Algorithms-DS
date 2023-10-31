const array1 = [5, 12, 8, 130, 44];
const array2 = ["d", "e", "f"];
const letras = ["a", "b", "c", "d", "e"];
const words = [
	"spray",
	"limit",
	"elite",
	"exuberant",
	"destruction",
	"present",
];

const arr1 = [0, 1, 2, [[[3, 4]]]];
const arr2 = [1, 20, 3, 4];

console.log(array1.at(1)); //Get element by index
console.log(array1.concat(array2)); //To merge 2 or more arrays

console.log(letras.copyWithin(1, 3, 5)); // copies part of an array to another
//location in the same array and returns it without modifying its length.

console.log(array1.every((currentValue) => currentValue < 40)); //Return true if every value is minnor to 40

console.log(array1.fill(0, 2, 4)); //Return an array with 0 from start to end
console.log(array1.fill(6)); //Return an array filling all with 6

console.log(words.filter((word) => word.length > 6)); //Return an array with word's length > six

//Return the first element which accomplish the condition
const inventory = [
	{ name: "apples", quantity: 2 },
	{ name: "bananas", quantity: 0 },
	{ name: "cherries", quantity: 5 },
];

console.log(inventory.find(({ name }) => name === "cherries")); //Return the first element which accomplish the condition or undefined

console.log(array1.findIndex((element) => element > 5)); //Returns the index of the first element in an array that satisfies the provided testing function or -1.

console.log(inventory.findLast(({ name }) => name === "cherries")); //Return the first element from last to the initial which accomplish the condition or undefined

console.log(array1.findLastIndex((element) => element > 5)); //Returns the index of the first element from end to start in an array that satisfies the provided testing function or -1.

console.log(arr1.flat(2)); //Returns an array of depth n, if n is 0 tyhe default depth will be 1

console.log(arr2.map((x) => [x * 2]));
console.log(arr2.flatMap((x) => [x * 2]));

// creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

console.log(array1.includes(2)); //Retur true or false depending on the argument
// Expected output: true

console.log(array1.indexOf(12)); //Return the index or -1 if not exists
console.log(Array.isArray(array1)); //To verify if is an array

const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); //Return an array separated by , or an specified characters

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo")); //returns the last index at which a given element
//can be found in the array, or -1 if it is not present.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop()); // removes the last element from an array and returns that element.

const count = animals.push("cows"); //adds one or more elements to the end of an array and returns
//the new length of the array.

const initialValue = 0;
const sumWithInitial = array1.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	initialValue
);
console.log(sumWithInitial); // executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer
//across all elements of the array is a single value.

console.log(array2.reverse()); //Return an array reversed

const firstElement = array1.shift(); //removes the first element from an array and returns that removed element.

console.log(animals.slice(-2)); //Similar to slice an object

const even = (element) => element % 2 === 0;
console.log(array1.some(even)); //Return true if some element accomplish the condition

console.log(arr2.sort((a, b) => a - b)); //Return an array sort alphabetically or depending on the parameter

const months = ["Jan", "March", "April", "June"]; //To insert or replace
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
months.splice(4, 1, "May"); //index, numberOfItems, value
// Replaces 1 element at index 4
console.log(months);

const arra1 = [1, 2, "a", "1a"];
console.log(array1.toString()); //To convert an array to string

//adds one or more elements to the beginning of an array and returns the new length of the array.
const nums = [1, 2, 3];
console.log(nums.unshift(4, 5));
