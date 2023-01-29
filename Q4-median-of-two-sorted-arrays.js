/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  for (let i of nums2) {
      nums1.push(i)
  }
  let mergedArr = nums1.sort((a,b)=> {return a-b})
  let len = mergedArr.length
  console.log(mergedArr, len)

  if (mergedArr.length % 2 !== 0){
      return mergedArr[(len-1)/2]
  }
  else {
      return (mergedArr[(len)/2 -1] + mergedArr[(len)/2])/2
  }

};