/*
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let substring = "";

  for (let i of s) {
    let index = substring.indexOf(i)
    if (index === -1) {
      substring += i;
    } else {
      longest = Math.max(longest, substring.length);
      substring = substring.slice(index + 1) + i;
    }
  }
  return Math.max(longest, substring.length);
};