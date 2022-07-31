let re;
re = /hello/;
re = /hello/i; // i = case insensitive;
// re = /hello/g; // Global search, it's try to find in all the instance of hello, in all the paragraph


console.log(re);
console.log(re.source);

// exec() - Return result in an array or null 
const result = re.exec('fran hello world');
console.log(result);

console.log(result[0]);
console.log(result.index);
console.log(result.input);



// test() - Return true or false
const result1 = re.test('hello');
console.log(result1);

// match() - Return result array or null
const str2 = 'Hello There';
const result2 = str2.match(re);
console.log(result2);

// search() - Returns index of the first match if not found it returns -1
const str3 = 'ello there';
const result3 = str3.search(re);
console.log(result3);

// replace() - Return new string with some or all matches of a pattern
const str4 = 'Hello there';
const newStr = str4.replace(re, 'Hi');
console.log(newStr);