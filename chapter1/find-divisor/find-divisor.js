function smallestDivisor(n) {
    return findDivisor(n, 2)
}

function squart(n) {
    return n * n;
}

function findDivisor(n, testDivisor) {
    if (squart(testDivisor) > n) return n;
    else if (isDivides(testDivisor, n)) return testDivisor;
    else return findDivisor(n, ++testDivisor);
}

function isDivides(a, b) {
    return ((b % a) == 0)
}

function isPrime(n) {
    return (n == smallestDivisor(n))
}

console.log(isPrime(1000000000007))