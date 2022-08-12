/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  return [...new Set(nums2)].filter(item => nums1.includes(item))
};
