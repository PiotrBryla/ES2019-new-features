const arr = [1,2,3,4,5]

// Array.prototype.flatMap()
// Runs map function trough the array and flats the output
// Depth of flatting function is always 1
console.log(arr.flatMap(el => [el, el*10, el*100]))

/* => [
  1, 10, 100, 2, 20, 200,
  3, 30, 300, 4, 40, 400,
  5, 50, 500
] */
