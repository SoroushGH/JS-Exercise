let age = 35;
let endAge = 70;
let teaPerDay = 2;

function calculateTea(age, endAge, teaPerDay) {
    return ((endAge - age) * 365) * teaPerDay
}

calculateTea(age, endAge, teaPerDay)