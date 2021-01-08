function last(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return (array.slice(Math.max(array.length - n, 0)));
    }
    return;
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
