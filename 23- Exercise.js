let num = prompt('Insert your number:')

function selector(num) {
    let str = num.toString();
    let result = [str[0]];

    for (let i = 1; i < str.length; i++) {
        if ((str[i - 1] % 2 === 0) && (str[i] % 2 === 0)) {
            result.push("-", str[i]);
        } else {
            result.push(str[i]);
        }
    }

    return result.join("");
}

selector(num);