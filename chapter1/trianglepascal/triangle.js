function C(n, k) {
    if (k == 0 || k == n) return 1;
    else return C(n - 1, k - 1) + C(n - 1, k)
}

console.log(C(1, 1))