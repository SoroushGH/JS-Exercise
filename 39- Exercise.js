function fizzBuzz(item) {
    for (let i = 1; i <= item; i++) {
        if (i % 5 === 0 && item % 3 === 0) {
            console.log('Fizz')
        } else if (i % 3 === 0) {
            console.log('Buzz')
        } else if (i % 5 === 0) {
            console.log('Fizz Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(5)