/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = new Set(nums).size != nums.length;
    return result;
};