// Before ES2019 JSON strings could not consist of U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR

// Before ES2019
const json = '"\u2028"';
JSON.parse(json); // => SyntaxError

// ES2019
const json = '"\u2028"';
JSON.parse(json); // => OK
