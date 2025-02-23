// Hello World
alert( 'Hello, world!' );
alert( "I'm JavaScript!" ); 

// Variables
let message;
message = 'Hello!';
alert(message);


message = 'World!'; // value changed
alert(message);


let hello = 'Hello world!';
// copy 'Hello world' from hello into message
message = hello;
// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!


let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3


const myBirthday = '18.04.1982';
//myBirthday = '01.01.2001'; // error, can't reassign the constant!


// Data Types
alert( 1 / 0 ); // Infinity
alert( "not a number" / 2 ); // NaN
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2}

let isGreater = 4 > 1;
alert( isGreater ); // true 

let age;
alert(age); // shows "undefined"


// Interaction
age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string


// Type Conversion
alert( "6" / "2" ); // 3, strings are converted to numbers

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// Basic Operates
let x = 1;
x = -x;
alert( x ); // -1

let y = 3;
alert( y - x ); // 3

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2

alert( 2 ** 2 ); // 2² = 4

alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"

alert(2 + 2 + '1' ); // "41" and not "221"

alert('1' + 2 + 2); // "122" and not "14"

let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23"

alert( +apples + +oranges ); // 5

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert( a ); // 3
alert( c ); // 0

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
alert( n ); // 14


//Comparisons
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true

a = 0;
alert( Boolean(a) ); // false
b = "0";
alert( Boolean(b) ); // true
alert(a == b); // true!

alert( 0 === false ); // false

alert( null == undefined ); // true
alert( null === undefined ); // false


//Conditional branching
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );

else {
    alert( 'How can you be so wrong?' ); // any value except 2015
}

if (year < 2015) {
    alert( 'Too early...' );
  } else if (year > 2015) {
    alert( 'Too late' );
  } else {
    alert( 'Exactly!' );
  }

age = prompt('age?', 18);
message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );

let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');


//Logical operators
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
}

alert( !!"non-empty string" ); // true
alert( !!null ); // false

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let height = null;
let width = null;
// important: use parentheses
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000


// Loops
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    alert(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, '');  
      // what if we want to exit from here to Done (below)?
    }
  }
alert('Done!');


// Switch
a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}

a = "1";
b = 0;
switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;
  case '2':
    alert( 'Two' );
    break;
  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}


// Functions
function showMessage() {
    alert( 'Hello everyone!' );
}
showMessage();
showMessage();

let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage();

userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function

userName = 'John';
function showMessage() {
  let userName = "Bob"; // declare a local variable
  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
// the function will create and use its own userName
showMessage();
alert( userName ); // John, unchanged, the function did not access the outer variable

function showMessage(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    alert( from + ': ' + text );
}  
let from = "Ann";  
showMessage(from, "Hello"); // *Ann*: Hello  
// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann

function sum(a, b) {
    return a + b;
}  
let result = sum(1, 2);
alert( result ); // 3

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
}

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
      alert(i);  // a prime
    }
}
  
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i == 0) return false;
    }
    return true;
}

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}  
function showOk() {
   alert( "You agreed." );
}  
function showCancel() {
   alert( "You canceled the execution." );
}  
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sum = function(a, b) {
    return a + b;
};

age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
    welcome = function() {
        alert("Hello!");
    };
} 
else {
  welcome = function() {
    alert("Greetings!");
  };
}
welcome(); // ok now

let sum = (a, b) => a + b;
alert( sum(1, 2) ); // 3

age = prompt("What is your age?", 18);
welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");
welcome();

