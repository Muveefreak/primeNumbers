function isPrime(i) {
    for (let c = 2; c <= Math.sqrt(i); ++c) {
        if (i % c === 0 ) return false;
    }
    return true;
}

const getPrimes = n => {
    let list = [];
    //For inputs equal to 1 or 0
    if ( n === 0 || n === 1 ) {
            console.log('Please enter an integer greater than or equal to two');
            return false;  
        }
    //For strings
    else if (typeof(n) != 'number'){
            console.log('Please input an integer');
            return 'undefined';
            
        }

    // For negative input
    else if (n < 0) {
        console.log('Please enter a value greater than 1');
        return 'undefined';
    }
    for (let i = 2; i != n; ++i)
        if (isPrime(i)) list.push(i);
    return list;
}

module.exports = {
    getPrimes: getPrimes
}
console.log(getPrimes(0));