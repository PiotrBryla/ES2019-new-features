// Optional catch binding
// Before ES2019
try {
  throw new Error("Something gone wrong!")
} catch (e) { // parameters must be bind
  console.log(e)
}

// ES2019 version
try {
  throw new Error("Something gone wrong")
} catch {
  console.log("Something gone wrong, no params to bind")
}
