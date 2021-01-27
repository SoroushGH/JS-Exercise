function palindrome(item) {
    let word = item.trim().toLowerCase().split('').reverse().join('')
    if (item.trim() === word) {
        return `The word '${item}' is a Palindrome word!`
    } else {
        return `The word '${item}' is NOT a Palindrome word!`
    }
}
palindrome('raceecar ')

//  Solution with only return true or false
function palindrome2(str) {
    // turn the string to lowercase
    str = str.toLowerCase()
    // reverse input string and return the result of the
    // comparisong
    return str === str.split('').reverse().join('')
}
palindrome2('raceecar')