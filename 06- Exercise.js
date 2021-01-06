var arr = ["milk", "cheese", "car", "lime"];
var index = 2;
var arr2 = [];

function assigner(arr, index) {
    arr2.push(arr[index])
    return arr2
}

assigner(arr, index);