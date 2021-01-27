// Solution #1
function fibonacci1(num) {
    var fibo = [0, 1];

    for (var i = 0; i <= num; i++) {
        fibo.push(fibo[i] + fibo[i + 1])
    }
    console.log(fibo)
    return fibo[num]
}

fibonacci1(9);


// Solution #2
function fibonacci2(num) {
    const result = [0, 1]

    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }
    return result[num]
}

fibonacci2(5)


//Solution #3
//Recursive approach without defining pre number
const fibonacci3 = num => {
    // if num is either 0 or 1 return num
    if (num < 2) {
        return num
    }
    // recursion here
    return fibonacci3(num - 1) + fibonacci3(num - 2)
}

fibonacci3(5)