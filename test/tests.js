const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("primeNumbers", function() {

    describe("Handle valid input", function() {
        it("should return 7 as prime number", function(){
            assert.equal(myApp.getPrimes(7), 'true')
        });

        // it("should return 120 as factorial for 5", function(){
        //     assert.equal(myApp.computeFactorial(5), 120)
        // });
    })

    // describe("Handle invalid input", function() {
    //     it("should return undefined as factorial for -5", function(){
    //         assert.equal(myApp.computeFactorial(-5), 'undefined')
    //     });

    //      it("should return undefined as factorial for 'demo'", function(){
    //         assert.equal(myApp.computeFactorial('demo'), 'undefined')
    //     });
    // })

})