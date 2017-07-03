"use strict";
const myApp = require('../src/main.js');
var expect = require('chai').expect;

describe('primeNumbers', function() {  
    describe('#primeNumbers()', function() {
        it('should return prime number of 1 to be false', function() {
            expect(myApp.getPrimes(1)).to.be.false;
        });
    });
    describe('#primeNumbers()', function() {
        it('should return prime number of 1 to be [2,3,5,7]', function() {
            expect(myApp.getPrimes(10)).to.eql([ 2, 3, 5, 7 ]);
        });
    });
});

// "use strict";

// var expect = require('chai').expect;

// // const assert = require('chai').assert;
// const myApp = require('../src/main.js');

// expect(myApp.getPrimes(1)).to.be.false; 

// describe("primeNumbers", function() {

//     describe("Handle valid input", function() {
//         it("should return 10 as prime number", function(){
//             assert.equal(myApp.getPrimes(10), [2,3,5,7])
//         });

//         // it("should return 120 as factorial for 5", function(){
//         //     assert.equal(myApp.computeFactorial(5), 120)
//         // });
//     })

//     describe("Handle invalid input", function() {
//         it("should return false as prime number 0", function(){
//             assert.equal(myApp.getPrimes(0), 'false')
//         });

//          it("should return false as prime number 1", function(){
//             assert.equal(myApp.getPrimes(1), 'false')
//         });
//     })

// })