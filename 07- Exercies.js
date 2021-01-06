var arr = ["banana", "apple", "orange"]
var arr2 = ["tv", "dvd-player", "playstation"]
var pos = 2
var resultArray = []

function swap(arr, arr2, pos) {
    let temp = arr[pos]
    arr[pos] = arr2[pos]
    arr2[pos] = temp
    return resultArray = [arr, arr2]

}

swap(arr, arr2, pos)