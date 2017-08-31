function fib(n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
fib(10);

function fb(n) {
    var res = [1, 1];
    if (n == 1 || n == 2) {
        return 1;
    }
    for (var i = 2; i < n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }
    return res[n - 1];
}
fb(33);