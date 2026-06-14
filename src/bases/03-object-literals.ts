interface Hero {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

/* 
 * If you do <<ctrl + .>> in an object variable linked to an interface, it gives you the option
 * to add the missing properties. 
 */
const ironman: Hero = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    postalCode: '90265',
    city: 'California',
  },
};

const spiderman: Hero = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;

const { address: spidermanAdress } = spiderman;

spidermanAdress.city = 'New York';
spidermanAdress.postalCode = '11375';

console.table([ironman, spiderman]);
