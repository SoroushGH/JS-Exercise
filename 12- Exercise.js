var arr = [
    "Breaking bad",
    "WestWorld",
    "Psych",
    "Games of Thrones",
    "Gotham",
    "Spartacus",
    "Dexter",
    "Office"
];

var newArray = []

function take_and_push(arr, a, b) {
    newArray.push(arr[a], arr[b])
    return newArray
}

take_and_push(arr, 2, 4)