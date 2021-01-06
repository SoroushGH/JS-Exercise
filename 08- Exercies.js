var arr = ["cheese", "salame", "bread", "water", "pizza"]
var index = 2

function splicer(arr, index) {
    arr.splice(index, 1)
    return arr
}


splicer(arr, index)