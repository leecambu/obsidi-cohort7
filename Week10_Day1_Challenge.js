const numbers = [1, 2, 3, 4, 5, 6, 7, 9];

// Using map() to create a new array with nested arrays. The second element will be the current number * 2
const nestedArray = numbers.map(num => [num, num * 2]);
console.log(nestedArray);


// Using flat() to flatten the nested arrays


// Using flatMap() to create a new flattened array


//Print nested array 
/*
[
  [ 1, 2 ],  [ 2, 4 ],
  [ 3, 6 ],  [ 4, 8 ],
  [ 5, 10 ], [ 6, 12 ],
  [ 7, 14 ], [ 9, 18 ]
]
*/

//Print flattened array
/*
[
  1,  2, 2,  4, 3,  6,
  4,  8, 5, 10, 6, 12,
  7, 14, 9, 18
]
*/


//Print flat mapped array
/*
[
  1,  2, 2,  4, 3,  6,
  4,  8, 5, 10, 6, 12,
  7, 14, 9, 18
]
*/