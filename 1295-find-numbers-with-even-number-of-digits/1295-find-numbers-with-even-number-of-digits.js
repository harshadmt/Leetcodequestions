/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
      return nums.filter((num)=>num.toString().length%2===0).length;
   

};