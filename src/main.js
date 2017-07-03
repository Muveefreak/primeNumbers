// module.exports = {
    function isPrime(i) {
    for (var c = 2; c <= Math.sqrt(i); ++c)
        if (i % c === 0 ) return false;
    return true;
    }

    function getPrimes(n) {
    var list = [];
    //   if (n < 2) return 'undefined';
    for (var i = 2; i != n; ++i)
        if (isPrime(i)) list.push(i);
    return list;
    }
// };

console.log(getPrimes(10));