let arr1 = ["12", "55", "hello"];
let arr2 = ["12", "55", true, false, true, true, true]

function booleanChecker(arr, maxCapacity) {
    let result = [];
    arr.forEach((item) => {
        if (typeof item === "boolean" && result.length < maxCapacity) {
            result.push(item);
        } else if (maxCapacity === undefined && typeof item === "boolean") {
            result.push(item);
        }
        //console.log(result);
    });
    return `${result.length} booleans were found ${result}`;
}


console.log("arr1 ==> ", booleanChecker(arr1, 3));
console.log("arr2 ==> ", booleanChecker(arr2, 3));
console.log("arr2 ==> ", booleanChecker(arr2, 1));
console.log("arr2 ==> ", booleanChecker(arr2));