var arr = ["car", "soap", "banana", "tv", "toothbrush"]

function removeFirstAndLast(arr) {
    arr.splice(-1)
    arr.splice(0, 1)
    return arr
}


removeFirstAndLast(arr)