function anagram(item1, item2) {
    var word1 = item1.toLowerCase();
    var word2 = item2.toLowerCase();
    var temp = []

    if (word1.length === word2.length) {
        //debugger
        for (var i = 0; i < word1.length; i++) {
            for (var j = 0; j < word2.length; j++) {
                if (word1[i] === word2[j]) {
                    //check if the letter already checked or not
                    if (!temp.includes(word1[i])) {
                        temp.push(word1[i])
                    }
                }
            }
        }
        if (temp.length === word1.length) {
            //console.log(temp)
            return `${item1} and ${item2} are anagram!`
        }
        else {
            return `${item1} and ${item2} are NOT anagram!`
        }
    }
    else {
        return `${item1} and ${item2} are NOT anagram!`
    }
}


anagram('finder', 'Friend')
anagram('findex', 'Friend')
anagram('hello', 'bye')