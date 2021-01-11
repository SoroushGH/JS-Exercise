let arr = ["2", 3, 1, 5, 9, { a: '2' }, 33, 65, 122, 66, ["banana"], true, [], {}, "2"];

check_types = (arr) => {

    let count = 0;
    let arr2 = [];
    arr.forEach((element) => {
        if (arr2.includes(typeof element) === false) {
            arr2.push(typeof element);
            count++;
        }
    });
    console.log(arr2);
    return count;
};

console.log(check_types(arr));