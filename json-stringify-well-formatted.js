
// Before ES2019
console.log(JSON.stringify('\uDF06\uD834')) // => "��"

// ES2019 -  Return escaped string if not in UTF-8 range
console.log(JSON.stringify('\uDF06\uD834')) // =>"\udf06\ud834"
