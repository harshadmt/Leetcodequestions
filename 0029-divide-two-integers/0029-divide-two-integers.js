/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
   let a = dividend/divisor
   let c =  Math.trunc(a)
  if(c>2147483647){
    return 2147483647
  }else if(c<-2147483648){
  return -2147483648
  }else{
    return c
  }
};