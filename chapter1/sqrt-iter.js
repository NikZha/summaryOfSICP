
function sqrtIter(guess, x) {
    while (Math.abs((guess * guess) - x) > 0.001) {
        let finding = x / guess;
        guess = (guess + finding) / 2
    }
    return guess;
}
/*
console.log(sqrtIter(1, 256))*/

function sqrtReqursion(guess, x) {
    if (goodEnough(guess, x)) {
        return guess
    } else {
       return sqrtReqursion(improve(guess, x), x)
    }
}

function improve(guess, x) {
    return average(guess, x / guess)
}

function average(x, y) {
    return ((x + y) / 2)
}

function goodEnough(guess, x) {
    return (Math.abs((guess * guess) - x) < 0.001)
}

function fact(x) {
    if (x == 0) return 1;
    return x * fact(x - 1)
    
}

console.log(sqrtReqursion(1, 9))

//console.log(fact(5))