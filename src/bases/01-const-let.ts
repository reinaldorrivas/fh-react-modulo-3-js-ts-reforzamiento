// * Unless you declare the var type explicit when you're using const, the data type is the value.
// * If you need to create a var, if its value never changes create it as a const, otherwise create it as a let.
const firstName = 'René';
const lastName: string = 'Rivas';

let diceNumber = 5;
console.log({ diceNumber });

diceNumber = 3;

// * When you're using the chaining operator, you need to take care about any var type change.
const letter = 'R';
const containsLetterR = lastName
  .toLowerCase()
  .trim()
  .includes(letter.toLowerCase().trim());

console.log({ firstName, lastName, containsLetterR, diceNumber });
