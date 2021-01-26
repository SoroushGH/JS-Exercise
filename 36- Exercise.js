// Solution #1
function findVowels(item) {
    var word = item.toLowerCase();
    counter = 0;

    for (i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            counter++;
        }
    }
    return counter;
}

// Solution #2
function findVowels(item) {
    var count = 0;
    var word = item.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];

    for (let char of word) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


findVowels('hello')