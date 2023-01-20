/* 
  Create a function that uses partition to fully sort an array
  in-place.
  Unstable sort.
  
  Time Complexity
    - Best: O(n log(n)) linearithmic.
    - Average: O(n log(n)) linearithmic.
    - Worst: O(n^2) quadratic.
  
  Space: O(1) constant.
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the
      last idx.
  - later these params will be used to specify a sub section of the array to
      partition.
  Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/


/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */
function quickSort(nums = [], start = 0, end = nums.length - 1) {
  if (start < end) {
    const pivotIdx = partition(nums, start, end);
    quickSort(nums, start, pivotIdx-1);
    quickSort(nums, pivotIdx+1, end);
  }
  return nums;
}


/* 
  Params: nums, start, end
    - start and end are indexes
    - start will be 0, and end will be the last idx.
  Steps:
  1. Select the last element to be your pivot value.
  2. The pivot index begins at start.
  3. Loop through nums from start to end.
  4. If the current value is less than or equal to the pivot value, 
  swap the current value with the value at the pivot index
  and increment the pivot index.
  5. After the loop, swap the value at pivot index
  with the pivot value at end.
  6. Finally, return the pivot index,
  the index where the left section of smaller values end.
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

function partition(nums = [], start = 0, end = nums.length - 1) {
  const pivotValue = nums[end];
  let pivotIdx = start;
  for (let i = start; i < end; i++) {
      if (nums[i] <= pivotValue) {

          [nums[i], nums[pivotIdx]] = [nums[pivotIdx], nums[i]];
          pivotIdx++;
      }
  }
  [nums[pivotIdx], nums[end]] = [nums[end], nums[pivotIdx]]
  return pivotIdx;
}

console.log(partition(nums1));
console.log(partition(nums2));
console.log(partition(nums3));
console.log(partition(nums4));