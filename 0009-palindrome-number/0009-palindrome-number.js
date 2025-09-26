/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
     }
    let str = String(x)

    let reverse = str.split('').reverse().join('')


    return str === reverse
 
};