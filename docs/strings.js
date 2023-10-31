const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

//to find a character
console.log(string1.at(0));
console.log(string1.charAt(3)); //The default index is 0
console.log(string1[4]);

//unicode representation
console.log(string1.charCodeAt(0)); //return an integer between 0 and 65535 (UTF-16)
console.log(string1.codePointAt(0)); //The codePointAt() method returns a non-negative integer that is the Unicode code point value at the given position.

console.log(string1.endsWith("ing", 8)); //Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object returning true or false as appropriate.
console.log(string1.startsWith("ing", 5)); //Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object returning true or false as appropriate.

console.log(string1.includes("ing")); //Return true if finds the word or false as apropriate
console.log(string1.indexOf("ing", 5)); //Return the the index of the first occurrence of the specified substring starting
// in a specific position or -1 if it doesn´t exist.
console.log(string1.length); //Return String´s length}
console.log(string1.match(/[A-Z]/g)); //Retrieves the result of matching a string against a regular expression.
console.log(string1.matchAll()); //...
console.log(string1.padStart(25, "0")); //Pads the string with a padstring until the resulting string reaches the given length.
console.log(string1.padEnd(25, "0")); //Pads the string with a padstring until the resulting string reaches the given length.
console.log(string1.repeat(3)); //Return a string n times

console.log(string1.replace("string", "number")); //Replace the first string found with another one
console.log(string1.replace(/string/i, "number")); //Replace the first string found with another one

console.log(string1.replaceAll("string", "number")); //Replace all the strings found with another one

console.log(string1.search("string")); //Return the index of the word found or -1 if this is not found
console.log(string1.slice(3, 7)); //Return the section of a string between the indexes

console.log(string1.split(" ", 2)); //Return an arrays of strings

console.log(string1.substring(6, 3)); //Retun a substring if the index is negative this will be treat as 0
console.log(string1.toLowerCase()); //returns the calling string value converted to lower case.
console.log(string1.toUpperCase()); //returns the calling string value converted to upper case
console.log(string1.toString()); //method returns a string representing the specified string value.
console.log(string1.trim()); //Remove white space from ends and the initial part of the string
console.log(string1.trimEnd()); //Remove white space from ends part of the string
console.log(string1.trimStart()); //Remove white space from initial part of the string

console.log(); //Return an array with 0 from start to end
