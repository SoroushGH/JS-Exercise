var arr1 = ["banana", "apple", "orange"]
var arr2 = ["tv", "dvd-player", "playstation"]
var pos = 2
var resultArray = []

function swap(arr1, arr2, pos) {
    let temp = arr1[pos] //=> orange
    arr1[pos] = arr2[pos]
    arr2[pos] = temp
    return resultArray = [arr1, arr2]

}

swap(arr1, arr2, pos)