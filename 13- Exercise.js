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

function concatenator(arr) {
    newArray = newArray.concat(arr)
    return newArray
}

concatenator(arr)