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

Example: 

> console.log(last([7, 9, 0, -2],3));

> console.log(last([7, 9, 0, -2]));

> console.log(last([7, 9, 0, -2],6));

Result: 

> -2

> [9, 0, -2]

> [7, 9, 0, -2]

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

### Exercise 
>

### Exercise 
>

### Exercise 
>