const mySymbol = Symbol('Symbol description')

// Before ES2019 Symbol's description was accessible

// With ES2019 Symbol's description can be accessed via description property
console.log(mySymbol.description) // => 'Symbol description'
