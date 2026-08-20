/*
1. JavaScript:

1.1 programming language that makes a web page dynamic, interactive and --> functional.
1.2 lightweight language
1.3 single threaded : means executes one task at a time without freezing the UI (also supports asynchronous operations)
1.4 cross-platform language
1.5 dynamically types : means variables types are determined at the run time


2. Features of JS :

2.1. Client Side Scripting -> JS runs on the user's browsers so it has faster response time without needing to communicate with the server.
2.2. Event Driven -> Responds to various user's actions.


3. Client Side Nature of JS :

Initially, JavaScript was designed mainly for client-side execution that involves controlling the browser and its DOM

That means:

User
 ↓
Browser
 ↓
JavaScript
 ↓
Execute behavior

For example:

Clicking a button
Showing a popup
Validating a form
Changing webpage content
Responding to user actions


4. Server Side Nature of JS :

Later, Node.js made it possible to run JavaScript outside the browser, especially on servers.

Node.js:
Node.js provides a runtime environment that allows JavaScript to run on the server side.

JavaScript
     ↓
Node.js Runtime
     ↓
Server-side applications

For Examples:
Involves interacting with databases
manipulating files
generating responses

5. ECMAScript:

ECMAScript is the standard/specification that JavaScript follows.

As JavaScript developed, different implementations and browsers could potentially behave differently.

A common standard was needed for:

Consistency
Standardization
Common rules
Uniform language behavior

Therefore:

ECMAScript
     ↓
Defines the standard/specification
     ↓
JavaScript
     ↓
Implementation of the standard
Simple Example

Think of:

ECMAScript = Blueprint / Rules


JavaScript = Implementation

ECMA International

ECMA International is the organization associated with defining ECMAScript standards.

The standard specifies things such as:

Language behavior
Syntax
Features
Rules
Standardization

Other languages/implementations can also follow ECMAScript specifications.


ES6:
ES6 is also called: ECMAScript 2015
It introduced many important JavaScript features.

Examples include:

let
const
Arrow functions
Classes
Template literals
Destructuring
Promises


6. Key Concepts from Lecture

6.1 JavaScript
Scripting language
Lightweight programming language
Originally designed for client-side/browser execution
Adds behavior and functionality
Can now be used on both client and server
Can be used for web, mobile, games, tools, etc.

6.2 ECMAScript
Standard/specification
Provides rules for JavaScript
Helps maintain consistency
ES6, ES13, etc. are ECMAScript editions/versions

6.3 JavaScript Engine
Executes JavaScript code
Examples: V8, SpiderMonkey, JavaScriptCore

6.4 Node.js
Runtime environment
Allows JavaScript to run outside the browser
Commonly used for server-side development

7. What You Should Remember for Interviews

Q1: What is JavaScript?
JavaScript is a scripting/programming language used to add dynamic behavior and functionality to applications. It was originally designed for client-side web development but can also be used for server-side development through runtimes such as Node.js.

Q2: What is ECMAScript?
ECMAScript is the standardized specification that defines the rules and features that JavaScript implementations follow.

Q3: What is the difference between JavaScript and ECMAScript?
ECMAScript is the standard/specification, while JavaScript is a language implementation based on that standard.

Q4: What is Node.js?
Node.js is a JavaScript runtime environment that allows JavaScript to execute outside the browser.

Q5: What is a JavaScript engine?
A JavaScript engine is the component that parses/compiles and executes JavaScript code, such as V8 in Chrome and Node.js.

*/

/*
Variables -- name of memory location that are used to store data values.
Depending upon how variables should behave, it can be declared using keywords like var, let and const.

var (var was used before ES6)
function and global scoped.
allows re-declaration in the same scope
causes issues like hoisting and global pollution
*/

var n = 5;
console.log(n);

var n = 20; // re-declaration is allowed
console.log(n);

//Can be accessed outside block if within the function.
if (true) {
  var x = 10; 
}
// Accessible outside the block
// because we are in same function
console.log(x);

/*
let:
introduced in ES6
block and global scoped
can not re-declared the variable in the same scope
values can be updated in the same scope
suitable for mutable variables
*/

// Cannot be accessed outside block even if inside the same function
if (true) {
  let y = 20;
  const z = 30;
}
console.log(y, z); // ReferenceError

/*
const:
introduced in ES6
block and global scoped
can not re-declared the variable in the same scope
values cannot be updated even in the same scope.
suitable for immutable variables
objects are still mutable(can be updated)
*/



a = 10;
b = 20;
sum = a+b;
console.log(sum);

//Data Types:
// defines what type or kind of data any variable holds.
// we do not need to define the data type of the variable as js is a dynamically type language, data is defined at the run time.

//Primitive Data Types:
// 1. Number: includes both integers and floating-point numbers
    a  = 23;
    console.log(typeof(a));

    let n1 = 2;
    console.log(n1)

    let n2 = 1.3;
    console.log(n2)

    let n3 = Infinity;
    console.log(n3)

    let n4 = 'something here too' / 2;
    console.log(n4)

// 2. Boolean: has only two values i.e. true and false.
    b  = true;
    console.log(typeof(b));

    let b1 = true;
    console.log(b1);  

    let b2 = false;
    console.log(b2);

// 3. String: series of characters that are surrounded by quotes
    c  = "vikas singh";
    console.log(typeof(c));

    let s1 = "Hello There";
    console.log(s1); 

    let s2 = 'Single quotes work fine';
    console.log(s2); 

    let s3 = `can embed ${s1}`;
    console.log(s3);

// 4. Undefined: variable that has been declared but not initialized with a value is automatically assigned the undefined value.
    let d ;
    console.log(typeof(d));

// 5. Null: represnts intentional absence of empty value
    e  = null;
   console.log(typeof(e));

// 6. Bigint: is a built-in object that provides a way to represent whole numbers greater than 253
    let b = BigInt("0b1010101001010101001111111111111111");
    console.log(b);

// 7. Symbol: introduced in ES6, are unique and immutable primitive values used as identifiers for object properties
    let s4 = Symbol("Geeks");
    let s5 = Symbol("Geeks");
    console.log(s4 == s5);




