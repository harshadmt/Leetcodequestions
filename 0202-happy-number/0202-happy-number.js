/**
 * @param {number} n
 * @return {boolean}
 */
function getSquareSum(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappy(n) {
  let slow = n;
  let fast = getSquareSum(n);

  while (fast !== 1 && slow !== fast) {
    slow = getSquareSum(slow);            
    fast = getSquareSum(getSquareSum(fast)); 
  }

  return fast === 1;
}
