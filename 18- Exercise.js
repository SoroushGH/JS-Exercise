var one = { name: "antonello" };
var two = ["name", "antonello"];
var three = [[], [], {}, "antonello", 3, function () { }];

function isArrayFunc(input) {
    return Array.isArray(input)
}

isArrayFunc(one)