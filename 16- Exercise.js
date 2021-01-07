var arr = ["green", "red", "black", "blue", "brown", "yellow", "purple"]

function isThere(arr, element) {
    return !(arr.includes(element))
}

isThere(arr, "red")