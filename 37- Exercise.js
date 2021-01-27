function fibonacci(num) {
    var fibo = [0, 1];

    for (var i = 0; i <= num; i++) {
        fibo.push(fibo[i] + fibo[i + 1])
    }
    console.log(fibo)
    return `${fibo[num]}`
}

fibonacci(9);