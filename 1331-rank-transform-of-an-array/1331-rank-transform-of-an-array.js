/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
let sorted = [...new Set(arr)].sort((a, b) => a - b);
  let rank = {};
  
  sorted.forEach((num, i) => rank[num] = i + 1);
  
  return arr.map(num => rank[num]);
};