// * This is rare to see, but is possible to control with TypeScript heterogenous values in arrays.
const myFirstArray: (string | number)[] = [1, 2, 3, '4'];
// * This is the norm because arrays manages homogeneous structures of related data.
const mySecondArray: number[] = [1, 2, 3, 4];

myFirstArray.push(5, '6');
mySecondArray.push(5, 6);

/* 
 * Arrays in JavaScript are objects, the best way to copy them
 * is doing a deep clone.
 */
const myThirdArray: number[] = structuredClone(mySecondArray);

myThirdArray.push(7);

console.log( {myFirstArray, mySecondArray, myThirdArray} );
