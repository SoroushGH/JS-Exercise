### Exercise 1
Create a variable called num1 and assign to it a value of 5 then create another variable called num2 and give to it a value of 15. and finally sum the together and return their sum.

### Exercise 2
Create 2 variables: num1 , num2 assign 10 to num1 and 24 to num2 return the total of the multiplication of num1 and num2.

### Exercise 3
Ever wondered how much a "lifetime supply of Tea you will need?"
let's find out!!!

- store  your current age in a variable
- store your estimated end age in a variable
- store how many teas you drink per day on average
- calculate how many you will need until the end!
- Output the result!

### Exercise 4
Define a function called compare which takes 2 arguments, and returns true if the first is bigger than the second and false if is not.

### Exercise 5
Define the name of the user

Define the year of birth of the user

Return his name and current age in a sentence like in the example:

> getAge(1982, 2018, 'Mari')    <== input

> Hello Mari you are 36 years old!  <== result

### Exercise 6
Write a function called assigner which takes 2 arguments, an array and an index.

It then takes one element from the provided array at the given index and place it in a new array then returns it.

> var arr = ["milk", "cheese", "car", "lime"];

> var index = 2;

> assigner(arr, 2);

> ["car"]   <== result

### Exercise 7
Create a function called swap which takes two arrays as the first two arguments and a position which is index as the third.

It then returns the two arrays swapping the value at the position passed as argument.

Return both arrays inside another array see example below:


> var arr = ["banana", "apple", "orange"];

> var arr2 = ["tv", "dvd-player", "playstation"];

> var pos = 2;

> swap(arr, arr2, pos)

> [ ["banana", "apple", "playstation"], ["tv", "dvd-player", "orange"] ]    <== result

### Exercise 8
Create a function called splicer which removes an element from an array and returns the array with the element removed.

This function takes two arguments:

- the array

- the position/index of the element in the array to be removed

> var arr = ["cheese", "salame", "bread", "water", "pizza"]

> splicer(arr, 2)["cheese", "salame", "water", "pizza"]   <== resurlt

### Exercise 9
write a function called removeFirstAndLast.

It takes an array as an argument and returns an array of which the first and last elements have been removed.


> var arr = ["car", "soap", "banana", "tv", "toothbrush"]

> removeFirstAndLast(arr)

> ["soap", "banana", "tv"]     <== result

### Exercise 10
write a function called removeAll. it takes an array as an argument and returns an array of which the all elements have be removed.


> var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 3, 4, 523, 44, 3454]

> removeAll(arr)

> [ ]    <== result

### Exercise 11
write a function called pusher. it takes one argument - an array.

using push take all elements from the array  and push them to a new variable called arr2 avoiding having nested arrays then return arr2

> hint==> take a look at spread operator: ...

> var arr = ["one", "two", "three", "four"];

> pusher(arr)

> ["one", "two", "three", "four"]     <== result

### Exercise 12
create a function called take_and_push which takes 3 arguments, an array and two numbers.

the second and third arguments are indexes you need to take the elements in the array that are at the given index and push them to a new array.

then return the new array.


> var arr = [
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office"
];

> take_and_push(arr, 2, 4)

> ["Psych", "Gotham"]   <== result

### Exercise 13
create a function called concatenator which takes an array as argument and then using Array.concat it returns a new array which is a clone of the original array.

> var arr = [
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office"
];

> concatenator(arr)

> [
  "Breaking bad",
  "WestWorld",
  "Psych",
  "Games of Thrones",
  "Gotham",
  "Spartacus",
  "Dexter",
  "Office"
]   <== result

### Exercise 14
create a function called findPosition which takes two arguments, an array and an element and it return the index of the given element.

Example:

> var arr = ["glass", "car", "watch", "sofa", "macbook"];

> findPosition(arr, "car")

> 1     <== result

> findPosition(arr, "sofa")

> 3     <== result

> findPosition(arr, "glass");

> 0     <== result

### Exercise 15
create a function called isThere which takes an array as first argument and a string as second, it needs to check if the string is inside the array and returns true if it is and false if it's not.

Example:

> var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"]

> isThere(arr, "red")

> true     <== result

> isThere(arr, "banana")

> false     <== result

### Exercise 16
now do the same exercise 15 using the method includes only this time you should return false if the color is there and true if it's not!

Example:

> var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"]

> isThere(arr, "red");

> false     <== result

> isThere(arr, "banana");

> true     <== result

### Exercise 17
write a function called characterRemover which takes two arguments, a string and a character to be removed and returns the string free of the unwanted character.

please note: in order for the string to make sense you should replace the unwanted characters with a space so that your string will look like this:

Example:

> var str = "I,Really,Like,Pizza"

> characterRemover(str, ",")

> "I Really Like Pizza"     <== result

### Exercise 18
write a function called isArrayFunc which takes an argument and returns true if it's an array and false if it's anything else.

Example:

> var one = { name: "antonello" };

> false     <== result

> var two = [ "name", "antonello" ];

> true     <== result

> var three = [ [ ], [ ], { }, "antonello", 3, function () {} ];

> true     <== result

### Exercise 19
write a function called longestString which takes an array and minLength as the arguments and returns the last element from the array with length bigger than minLength:

Example:

> let fruits = ['banana', 'kiwi', 'orange', 'apple', 'watermelon', 'pear']

> longestString(fruits, 5)

> 'watermelon'     <== result

### Exercise 20
Write a function called arrayClone to clone an array.

#### Note:
- The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

- The splice() method changes the original array and slice() method doesn’t change the original array.

- The splice() method can take n number of arguments and slice() method takes 2 arguments.

Example:
 
> array_Clone([1, 2, [4, 0]]);

> [1, 2, 4, 0]     <== result 

> array_Clone([1, 2, [4, 0]])

> [1, 2, [4, 0]]     <== result

### Exercise 21
Write a function called last to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

#### Note:
- The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

- The splice() method changes the original array and slice() method doesn’t change the original array.

- The splice() method can take n number of arguments and slice() method takes 2 arguments.

> The Math.max() function returns the largest of the zero or more numbers given as input

Example: 

> console.log(last([7, 9, 0, -2],3));

> console.log(last([7, 9, 0, -2]));

> console.log(last([7, 9, 0, -2],6));

Result: 

> -2

> [9, 0, -2]

> [7, 9, 0, -2]

### Exercise 22
Write a JavaScript function called join to join all elements of the following array into a string.

Example:

> myColor = ["Red", "Green", "White", "Black"];

Result:

>"Red,Green,White,Black"

>"Red,Green,White,Black"

>"Red+Green+White+Black"

### Exercise 23
Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.

Example:

> Inpur 025468 

> Result ==>     0-254-6-8.

### Exercise 24
Write a JavaScript function called sortArray to sort the items of an array.

> Input ==> var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

> Output1 ==> [-4, 1, 13, 2, 3, 3, 5, 6, 66, 7, 8]

> Output2 ==> [-4, 1, 2, 3, 3, 5, 6, 7, 8, 13, 66]

> Output3 ==> [66, 13, 8, 7, 6, 5, 3, 3, 2, 1, -4]

### Exercise 25
write a function  called is_an_even_number that takes an array as argument, it loops through it and checks if the elements 
are numbers (or a string that can be converted to a number) and if they are even.

you should also keep track of the even numbers by increasing the value of a variable called count, which you should return at the end of the function.
for this exercise we treat number 0  as an even number, but only if it is provided as a zero


> Input ==> let array = [1,5,9,33,65,[],'',122,66,['banana']]

> result ==> 2

### Exercise 26
write a function called check_types it takes an array as argument, it loops through it and checks the typeof each element it needs to find out how many different data types there are.

it should at the end return the number of data types.

> Input ==>  arr = ["2", 3, 1, 5, 9, { a: '2' }, 33, 65, 122, 66, ["banana"], true, [], {}, "2"];

> Output ==> 4  

### Exercise 27
write a function called booleanChecker, it takes two arguments, one array and one maxCapacity which is a number create an empty array called bool inside your function loop through the provided array and every time you find a boolean push it to our bool array until you reach the maxCapacity: if the maxCapacity argument is missing it should default to unlimited;

> booleanChecker(["12", "55","hello"],3)

> result ==> "0 booleans were found " 

> booleanChecker(["12", "55",true, false, true, true, true],3)

> result ==> "3 booleans were found true,false,true" 

> booleanChecker(["12", "55", true, false, true, true, true],1)

> result ==> "1 booleans were found true" 

> booleanChecker(["12", "55",true, false, true, true, true])

> reult ==> "5 booleans were found true,false,true,true,true"

### Exercise 28
write a function called Filter that takes 3 arguments, an array, a data type and a minLength. it will loop through the array and return a new array where the elements are NOT of the type of passed data type and they have a length equal to or bigger than minLength.

> input ==> ['sdads','sadsasadasddsaddsadadsasd',44, [1,5,5,5,5,5,5,5,5,5,5,5]], 'object', 3)

> result ==> ["sdads", "sadsasadasddsaddsadadsasd", "555"]

### Exercise 29
write a function called addToObj which takes two arguments and returns  an object which has the first argument as a key and the second as value.

> addToObj('age',22)

> result ==> {age:22}

> addToObj('name','Jason')

> result ==> {name:'Jason'}

### Exercise 30
 Write a function called modifyObject that takes 3 arguments. the first argument is the object to which you are adding new data the second argument is a key to be added the third argument is the value to be associated with the key

> modifyObject(obj, 'a', 1)

> result ==>  {a:1}

> modifyObject(obj, 'b', 2)

> result ==>  {a:1, b:2}

> modifyObject(obj, 'c', 3)

> result ==>  {a:1, b:2, c:3}

### Exercise 31
Write a function called addToList that takes one argument,an array of movie titles then create a new empty array called movieList.

Loop through the array of movie titles and push them inside the movieList array as objects.

each object will have two key/value pairs with titles and ids: 

movie title from the array becomes the value of 'title' key in the object index of the element in the array should be the value for the id key in the object then return movieList.

var movies = ['matrix','the dark knight','a beautiful mind','american pie']

addToList(movies)

result ==> 

 > [ {title:'matrix',id:0}, {title:'the dark knight',id:1}, {title:'a beautiful mind',id:2}, {title:'american pie',id:3} ]  

### Exercise 32 
Write a function called swap that takes one argument, an object, and returns another object where the key/value pairs have been swapped.The original object should not be modified.

> swap({'name':'Mari'})

> result ==>  {Mari: "name"}   

> swap({'age': 55})

> result ==>  {55: "age"}  

### Exercise 33
write a function called getIndex which finds the index of an element in an array of objects, the objects have multiple key/value pairs so your function need to be flexible enough to find by any of them.

it should return the index of the found element or -1 if is not there.

to pass the test your function should take 3 arguments: array of objects, name of the key and content of the value to search for, so if they match it returns the index of the object containing this matching key:value pair

> getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'Antonello')

> result ==>  0

> getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'George')

> result ==>  1

> getIndex([{name:'Antonello'}, {name:'George'}, {name:'Golda'}],'name', 'Peter')

> result ==>  -1

### Exercise 34
Write a function called runOnRange that takes one argument, an object. this object will contain three properties, a start, and end and a step. according to these properties it should push specific numbers to an array. Once done return the array.

> runOnRange({start: 20, end: 26, step: 0})

> result ==> []

> runOnRange({start: 20, end: 26, step: 3})

> result ==> [ 20, 23, 26 ]

> runOnRange({start: 26, end: 24, step: -1})

> result ==> [ 26, 25, 24 ]

> runOnRange({start:12, end: 10, step: 1})

> result ==> []

> runOnRange({start:0, end: 10, step: 4})

> result ==>[ 0, 4, 8 ]

### Exercise 35
Anagram

A word is an anagram of another word if both use the same letters in the same quantity, but arranged differently.

Understanding the challenge

You can state this challenge in the following terms: write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For example:

> anagram('finder', 'Friend')  --> true

> anagram('hello', 'bye') --> false



### Exercise 36
Find the Vowels

The vowels are “a”, “e”, “i”, “o”, “u”.

You can state the vowels challenge as follows: write a function that takes a string as argument and returns the number of vowels contained in that string.

Examples:

> findVowels('hello') result ==> 2

> findVowels('why') result ==> 0

### Exercise 37
Fibonacci (with 3 solutions, include recursive approach)

A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two. For example, the first ten numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

The Fibonacci challenge goes something like this: write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as argument to the function.

Example:

> fibonacci(3)  result ==> 2

### Exercise 38
Palindrome

A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.

The problem can be stated along the following lines: given a string, return true if the string is a palindrome and false if it isn’t. Include spaces and punctuation in deciding if the string is a palindrome. For example:

> palindrome('racecar')  ===  true

> palindrome('table')  ===  false

### Exercise 
FizzBuzz

This is a super popular coding challenge — the one question I couldn’t possibly leave out. Here’s how you can state the problem.

The FizzBuzz challenge goes something like this. Write a function that does the following:

console logs the numbers from 1 to n, where n is the integer the function takes as its parameter

- logs fizz instead of the number for multiples of 3

- logs buzz instead of the number for multiples of 5

- logs fizzbuzz for numbers that are multiples of both 3 and 5

Example:

> fizzBuzz(5)

Result =>

1

2

fizz

4

buzz

### Exercise 
>

### Exercise 
>

### Exercise 
>

### Exercise 
>

### Exercise 
>

### Exercise 
>

### Exercise 
>

### Exercise 
>