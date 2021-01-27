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