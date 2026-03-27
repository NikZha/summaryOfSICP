function fib(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

function fibDinamic(n) {
    let arr = new Array(n + 1)
    arr[0] = 0
    arr[1] = 1
    for (let i = 2; i < n + 1; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}

function fibThree(n) {
    let noll = 0;
    let one = 1;
    let x = n;
    for (let i = 2; i < x+1; i++) {
        n = noll + one;
        noll = one;
        one = n
    }
    return n;
}
// console.log(fibThree(20))

function fibIter(a, b, count) {
    if(count == 0) return b;
    return fibIter((a+b), a, --count)
}

console.log(fibIter(1, 0, 3))