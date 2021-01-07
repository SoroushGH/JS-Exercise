var arr = ["one", "two", "three", "four"];

let pusher = (arr) => {
    var arr2 = [];
    arr2.push(...arr);

    return arr2;
}



var arr = ["one", "two", "three", "four"];
let arr2 = []

function pusher(arr) {
    arr2 = [...arr]
    return arr2
}

pusher(arr)