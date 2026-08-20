/*
Type Conversion and Type Coercion In JS:
--> Type Conversion and Type Coercion are the two ways through which we can change the data type of the variables from one type to the other.

1. Type Conversion: (Explicit Type Casting - Manually)
--> The process in of converting data type of the variables  to another type manually.
--> This is also known as explicit type casting.
Performed manually by the programmer.
--> Uses built-in JavaScript methods like Number(), String(), and Boolean().
*/

/*
String to Number:
We can convert a string into numbers using the Number() function, parseInt(), and parseFloat() methods.
*/
let s1 = "123";
let n1 = Number(s);  // Converts string to number
console.log(n1);

/*
2. Number to String:
We can convert a number into a string using String() function or we can concatenate it with an empty string("").
 */

let n2 = 123;
let s2 = String(n);  //Converts number to string
console.log(s2);

/*
3. Boolean to Number:
We can convert a boolean into a number using Number(), so true becomes 1 and false becomes 0.
 */
let bool1 = true;
let n3 = Number(bool1);  //Converts boolean to number
console.log(n3);

/*
4. Boolean to String:
We can convert boolean into string using String() or by concatenating it with an empty string.
 */
let bool2 = true;
let s3 = String(bool2);  //Converts boolean to string
console.log(s3);

/*
2.Type Coercion: (Implicit Type Casting - Automatically by JS Engine)
The process of automatic conversion of one data type to another by JavaScript during operations.
This is also known as implicit type casting.

Performed automatically by JavaScript.
Happens mostly in comparison and arithmetic operations.
Can lead to unexpected results if not handled properly.
 */


/*
1. String + Number:
JavaScript will automatically or implicitly convert the number to a string if there is the string present in the arithmetic operation.
 */
let n4 = 5;
let s4 = "5";
let res1 = n4 + s4;  // JavaScript converts num to string
console.log(res1); 
console.log(typeof(res1))

/*
2. Boolean + Number:
JavaScript converts the boolean value into a number, true becomes 1 and false becomes 0, when we perform the arithmetic operations.
 */
let bool3 = true;
let n5 = 10;
let res2 = bool3 + n5;  // JavaScript converts boolean to number
console.log(res2);

/*
3. Comparison of Different Types:
JavaScript convert the two value of data type into the common type when we compare their values.
 */
let s6 = "10";
let n6 = 10;
console.log(s6 == n6);  // true, JavaScript converts str to number

/*
JavaScript Operators:
JavaScript operators are symbols or keywords used to perform operations on values and variables.

1. Arithmetic Operators:
Arithmetic Operators perform mathematical calculations like addition, subtraction, multiplication, etc.

+ -> adds two numbers.
- -> subtracts the second number from the first.
* -> multiplies two numbers.
/ -> divides the first number by the second.
*/

const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);

/*
2. Assignment Operators:
Assignment operators are used to assign values to variables. They can also perform operations like addition or multiplication while assigning the value.

= --> assigns a value to a variable.
+= -> adds and assigns the result to the variable.
*= -> multiplies and assigns the result to the variable.
 */

let n = 10;
n += 5;
n *= 2;
console.log(n);

/*
3. Comparison Operators:
Comparison operators compare two values and return a boolean (true or false). They are useful for making decisions in conditional statements.

> checks if the left value is greater than the right.
=== checks for strict equality (both type and value).
Other operators include <, <=, >=, and !==.
 */

console.log(10 > 5);
console.log(10 === "10");

/*
4. Logical Operators:
Logical operators are mainly used to perform the logical operations that determine the equality or difference between the values.

&& returns true if both operands are true.
|| returns true if at least one operand is true.
! negates the boolean value.
*/

const a = true, b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR

/*
5. Bitwise Operators:
Bitwise operators perform operations on binary representations of numbers.

& performs AND operation on each bit.
| performs OR operation on each bit.
^ performs XOR (exclusive OR) on each bit.
~ inverts all bits (NOT operator).
<< shifts bits to the left.
>> shifts bits to the right (with sign).
>>> shifts bits to the right (without sign).
*/

const res = 5 & 1; // Bitwise AND
console.log(res);

/*
6. Ternary Operator:
The ternary operator is a shorthand for conditional statements. It takes three operands.

condition ? expression1 : expression2 evaluates expression1 if the condition is true, otherwise evaluates expression2.
*/
const age = 18;
const eligibility = age >= 18 ? "Adult" : "Minor";
console.log(eligibility);

/*
7. Unary Operators:
Unary operators operate on a single operand (e.g., increment, decrement).

+ converts a value to a number.
- negates a value (changes its sign).
++ increments a value by 1.
-- decrements a value by 1.
! converts to boolean and reverses the value (true ↔ false).
typeof returns the data type of a variable.
delete removes a property from an object.
*/

let x = 5;

console.log(+x);
console.log(-x);

console.log(++x);
console.log(--x);

console.log(!x);