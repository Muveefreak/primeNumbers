function isPrime(i) {
    for (let c = 2; c <= Math.sqrt(i); ++c) {
        if (i % c === 0 ) return false;
    }
    return true;
}

const getPrimes = n => {
    let list = [];
    if ( n === 0 || n === 1 ) {
            return false;
        }
    for (let i = 2; i != n; ++i)
        if (isPrime(i)) list.push(i);
    return list;
}

module.exports = {
    getPrimes: getPrimes
}
console.log(getPrimes(10));