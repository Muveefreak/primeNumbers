     function isPrime(i) {
    for (var c = 2; c <= Math.sqrt(i); ++c)
        if (i % c === 0 ) return false;
    return true;
    }
//exports.getPrimes = function(n){
 module.exports = 
    function getPrimes(n) {
    let list = [];
    if ( n === 0 || n === 1 ) {
            return false;
        }
    for (let i = 2; i != n; ++i)
        if (isPrime(i)) list.push(i);
    return list;
    }


//console.log(getPrimes(1));