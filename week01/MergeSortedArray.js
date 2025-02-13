/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let tail1 = m - 1,
    tail2 = n - 1,
    finished = m + n - 1;
  while (tail1 >= 0 && tail2 >= 0) {
    nums1[finished--] =
      nums1[tail1] > nums2[tail2] ? nums1[tail1--] : nums2[tail2--];
  }
  //  check if any remaining in second array
  while (tail2 >= 0) {
    nums1[finished--] = nums2[tail2--];
  }
};
