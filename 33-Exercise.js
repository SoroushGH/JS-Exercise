let array = [{ name: "Antonello" }, { name: "George" }, { name: "Golda" }];

function getIndex(array, key, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return i
        }
    }
    return -1
}

console.log(getIndex(array, "name", "Golda"));