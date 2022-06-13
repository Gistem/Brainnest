# JavaScript 1

## 1. Name the three ways to declare a variable?

`var let const`

## 2. Which of the three variable declarations should you avoid and why?

## 3. What rules should you follow when naming variables?

A variable name can only have letters (both uppercase and lowercase letters), digits and underscore.
The first letter of a variable should be either a letter or an underscore.

## 4. What should you look out for when using the + operator with numbers and strings?

you can concatenate strings with +

## 5. How does the % operator work?

give's you the module

## 6. Explain the difference between == and ===.

== ignores the datatype of variable

=== checks datatype and compares two values.

## 7. When would you receive a NaN result?

You get NaN when the value cannot be computed or as a result of attempted number coercion (type conversion) of non-numeric value (such that undefined) for which primitive numeric value is not available.

## 8. How do you increment and decrement a number?

++ or --

## 9. Explain the difference between prefixing and post-fixing increment/decrement operators.

Prefix increment operator means the variable is incremented first and then the expression is evaluated using the new value of the variable

Prefix decrement operator means the variable is decremented first and then the expression is evaluated using the new value of the variable

## 10. What is operator precedence and how is it handled in JS?

determines the order in which operators are evaluated

## 11. How do you log information to the console?

console.log

## 12. What does unary plus operator do to string representations of integers?

The unary plus (+) operator is the fastest (and preferred) method of converting something into a number.

It can convert:

string representations of integers (decimal or hexadecimal) and floats.
booleans: true, false.
null
Values that can't be converted will evaluate to NaN.

## 13. What are the eight data types in JavaScript?

String.
Number.
Boolean.
Null.
Undefined.
Symbol.
BigInt.
Object.

## 14. Which data type is NOT primitive?

object

## 15. What is the relationship between null and undefined?

null is an assigned value. It means nothing.
undefined means a variable has been declared but not defined yet

## 16. What is the difference between single, double, and backtick quotes for strings?

singles & doubles are the same. with the backtick you can add logic

## 17. What is the term for embedding variables/expressions in a string?

## 18. Which type of quote lets you embed variables/expressions in a string?

backticks

## 19. How do you embed variables/expressions in a string?

- ` `${}` `

## 20. How do you escape characters in a string?

with \

## 21. What is the difference between the slice/substring/substr string methods?

slice() extracts parts of a string and returns the extracted parts in a new string.
substr() extracts parts of a string
substring() extracts parts of a string and returns the extracted parts in a new string.

## 22. What are the three logical operators and what do they stand for?

!= && ||

## 23. What are the comparison operators?

== != ===

## 24. What are truthy and falsy values?

values evaluated by booleans

## 25. What are the falsy values in JavaScript?

undefined , null , NaN , 0 , empty string, false

## 26. What are conditionals?

a kind of control to select which code is going to be runned

## 27. What is the syntax for an if/else conditional?

`if(something) { something } else { something } `

## 28. What is the syntax for a switch statement?

switch( ) {
case1:
something
break;
case2:
something
break
}

## 29. What is the syntax for a ternary operator?

? = if : = else

## 30. What is nesting?

Nesting is when you write something inside of something else.

## 31. What are functions useful for?

automitizing code

## 32. How do you invoke a function?

functionName ()

## 33. What are anonymous functions?

functions with no name, inmediate invoked functions.

## 34. What is function scope?

all the content in between the braces

## 35. What are return values?

values returned for a function that returns something

## 36. What are arrow functions?

a simple way to write functions
= () =>
