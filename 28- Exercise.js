let array = ["sdads", "sadsasadasdds", '555', 44, [1, 5, 5, 5, 5, 5]];

function filter(array, dataType, minLength) {
    let newArray = [];

    array.forEach((item) => {
        if (typeof item !== dataType && item.length >= 3) {
            newArray.push(item);
        }
    });
    return newArray;
}

filter(array, "object", 3)