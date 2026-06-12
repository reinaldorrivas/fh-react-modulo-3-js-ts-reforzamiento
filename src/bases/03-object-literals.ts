interface Address {
  postalCode: string;
  city: string;
}

interface Hero {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

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
