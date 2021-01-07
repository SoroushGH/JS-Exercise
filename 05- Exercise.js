let name = 'Mari';
let birthDate = 1982;
let year = 2018;

function getAge(name, birthDate, year) {
    let age = year - birthDate;
    return (`Hello ${name} you are ${age} years old!`)
}

getAge(name, birthDate, year)