interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const hero: Hero = {
  name: 'Tony Stark',
  age: 45,
  key: 'Ironman',
};

// * Before destructuring: You had to reference the object and manually access each property.

const traditionalName = hero.name;
const traditionalAge = hero.age;
const traditionalKey = hero.key;

console.log({ traditionalName, traditionalAge, traditionalKey });

// * With destructuring: You unpack properties directly into variables from the object.

const {
  name: destructuredName,
  age: destructuredAge,
  key: destructuredKey,
} = hero;

console.log({ destructuredName, destructuredAge, destructuredKey });

interface ParsedHero {
  keyName: string;
  user: {
    name: string;
    age: number;
  };
  rank: string | undefined;
}

const useContext = (hero: Hero): ParsedHero => {
  const { name, age, key, rank = 'Sin Rango' } = hero;

  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const {
  keyName,
  user,
  user: { name, age },
  rank,
} = useContext(hero);

console.log({ keyName, name, age, rank });
console.log(user);
