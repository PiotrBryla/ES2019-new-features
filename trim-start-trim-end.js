// ES2019 introduce two new function for String instances:
// String.prototype.trimStart() - removes whitespace from the beginning of the string
// String.prototype.trimStart() - removes whitespace from the end of the string

const myString = "  Third Bridge  ";

console.log(myString.trimStart()) // =>"Third Bridge  "
console.log(myString.trimEnd()) // =>"  Third Bridge"
