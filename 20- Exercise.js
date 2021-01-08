function first(arr, n) {
    if (arr.length === 0) {
        return arr;
    } else if (n === undefined) {
        return arr[0];
    } else {
        return arr.slice(0, n);
    }
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));