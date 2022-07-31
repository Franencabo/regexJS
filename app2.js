let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /^hello$/i; // Only can be hello, it starts and ends with
re = /^h.llo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // e & a are optional
re = /gre?a?y\?/i; // Escaping character


// Brackets [] - character sets
re = /gr[ae]y/i;  // must be an a or e
re = /[GF]ray/;  // must be a G or F
re = /[^GF]ray/;  // Match anything except a G or F
re = /[A-Z]ray/;  // Match any uppercase letter
re = /[a-z]ray/;  // Match any lowercase letter
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9]ray/;    // Any digit

// Braces {} - quantifiers
re = /Hel{2}o/i; //Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //Must occur exactly 2,3 or 4 amount of times
re = /Hel{2,}o/i; //Must occur at least {m} amount of times

// Parenthesis () - Grouping
re = /^([0-9]x){3}$/ // 3x3x3x

// Shorthand Character Classes
re = /\w/; //Word character, any letter, any number or _
re = /\w+/; // + = one or more
re = /\W/; // Non word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/;  //None digit
re = /\s/;  // Match whiteSpace char
re = /\S/;  // None whiteSpace char
re = /Hell\b/i;  // Word boundary

// Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if NOT followed by y


// String to match
const str = 'Hello';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT matched ${re.source}`)
    }
}

reTest(re, str);