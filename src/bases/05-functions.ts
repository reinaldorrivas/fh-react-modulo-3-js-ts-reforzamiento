/*
 * Traditional functions, allows hoisting and other in-buit behaviors.
 * Traditional functions can be overwritten.
 */
function greet(name: string): string {
  return `¡Hola, ${name}!`;
}

const greetMessage = greet('Goku');

console.log({ greetMessage });

/*
 * Arrow functions are cleaner to read and avoid problems with
 * the "This" object unlike the traditional functions.
 */
const greetArrowFunction = (name: string): string => `¡Hola, ${name}!`;

const greetMessageArrowFunction = greetArrowFunction('Vegeta');

console.log({ greetMessageArrowFunction });

// * Homework

interface User {
  uuid: string;
  userName: string;
}

function getUser(): User {
  return {
    uuid: 'abc-123',
    userName: 'Batman',
  };
}

const user = getUser();
console.log({ user });

const getUserArrowFunction = (): User => ({
  uuid: 'def-456',
  userName: 'Superman',
});

const userFromArrowFunction = getUserArrowFunction();
console.log({ userFromArrowFunction });

// * Some reason to use arrow functions is their readability

const myNumbers: number[] = [1, 2, 3, 4, 5];

myNumbers.forEach(function (traditionalFunctionElement: number) {
  console.log({ traditionalFunctionElement });
});

myNumbers.forEach((arrowFunctionElement: number) =>
  console.log({ arrowFunctionElement }),
);

/*
 * If you call a method and you need only to run a function inside it to use its values,
 * you only need to pass the function as a parameter.
 */

myNumbers.forEach(console.log);
