// With ES2019 Function.prototype.toString was reviewed.
// Now the method doesn't strip white spaces and comments
// and returns exact representation of function definition

// Before ES2019
// function /* Comments */ foo() {  }
// foo.toString() // => 'function foo() {}'

// ES2019
function /*Comments */ foo () {

  /* Comments */

}

foo.toString() // => 'function foo() { /* Comments */ }'
console.log(foo.toString())
