// * Unless you declare the var type explicit, the data type is the value
// * If you need to create a var, if it's value never changes create it as a const, otherwise create it as a let
const firstName = "René";
const lastName: string = "Rivas";

let diceNumber = 5;
diceNumber = 3;


// * When you're using the chaining operator, you need to take care about any var type change
const containsLetterH = lastName.toLowerCase().trim().includes("H");

console.log({ firstName, lastName, containsLetterH, diceNumber });
