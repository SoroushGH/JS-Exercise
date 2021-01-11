let arr1 = ["12", "55", "hello"]
let arr2 = ["12", "55", true, false, true, true, true]
let arr3 = ["12", "55", true, false, true, true, true]


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

booleanChecker(arr, 3);