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
