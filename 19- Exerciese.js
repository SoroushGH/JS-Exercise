let fruits = ['banana', 'kiwi', 'orange', 'apple', 'watermelon', 'pear'];

function longestString(fruits, minLength) {
    let fruitName = "";
    fruits.forEach((element) => {
        debugger
        if (element.length > minLength && element.length > fruitName.length) {
            fruitName = element;
        }
    });
    return fruitName;
}
longestString(fruits, 5);


let longestString = (fruits) => {
    let len = 0;
    let fruitName = '';
    fruits.forEach((element) => {
        debugger
        if (element.length > len) {
            len = element.length;
            fruitName = element;
        }
    });
    return fruitName;
};
longestString(fruits, 5);