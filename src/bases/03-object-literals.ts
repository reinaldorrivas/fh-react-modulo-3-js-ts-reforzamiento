interface Hero {
  firstName: string;
  lastName: string;
  age: number;
}

const hero: Hero = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
};

hero.firstName = 'Peter';
hero.lastName = 'Parker';
hero.age = 22;

console.log(hero);
