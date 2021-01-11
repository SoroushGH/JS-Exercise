let array = [1, 5, 9, 33, 65, [], "", 122, 66, ["banana"]];

function is_an_even_number(array) {
    let count = 0;
    array.forEach((item) => {
        if (typeof item === "number" && item % 2 === 0) {
            count += 1;
        }
    });
    return count
}

is_an_even_number(array)