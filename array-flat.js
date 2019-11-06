// Array.prototype.flat
const arr = [1,2,[3,[4,5]]];

// By default array gets flatten one level
console.log(arr.flat()) // => [ 1, 2, 3, [ 4, 5 ] ]

// But we can pass number of nested levels
// It will recurrently flat nested arrays
console.log(arr.flat(Infinity)) // => [ 1, 2, 3, 4, 5 ]

