var myPow = function(x, n) {
    console.log("call:", x, n);
    if (n === 0) return 1;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let half = myPow(x, Math.floor(n / 2));
    console.log("returning for", n, "half =", half);

    if (n % 2 === 0) return half * half;
    else return x * half * half;
};

console.log(myPow(2, 5));
