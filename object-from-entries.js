// ES2019 introduce new Object instance method
// It works like reversed Object.entries i.e.:

const obj = {
  a: 'a',
  b: 'b',
  c: 'c'
}

const entries = Object.entries(obj)
console.log(entries) // => [ [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] ]

const objectFromEntries = Object.fromEntries(entries)
console.log(obj) // => { a: 'a', b: 'b', c: 'c' }
