/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result  = nums.map((a)=>a*a)
    let a = result.sort((a,b)=>a-b)
    return a
};