
// * Esto es muy raro, pero es posible de controlar con TypeScript datos heterogéneos dentro de los arrays.
const myFirstArray: (string | number)[] = [1, 2, 3, '4'];
// * Esto es la norma porque los arrays son estructuras homogéneas de datos relacionados.
const mySecondArray: number[] = [1, 2, 3, 4];

myFirstArray.push(5, '6');
mySecondArray.push(5, 6);

/* 
 * Los arrays en JavaScript son objetos, la mejor manera de copiarlos 
 * es haciendo una copia profunda.
 */
const myThirdArray: number[] = structuredClone(mySecondArray);

myThirdArray.push(7);

console.log( {myFirstArray, mySecondArray, myThirdArray} );
