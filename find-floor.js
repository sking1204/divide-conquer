/* Write a function called findFloor which accepts a sorted array 
and a value x, and returns the floor of x in the array. 
The floor of x in an array is the largest element in the array 
which is smaller than or equal to x. If the floor does not exist, return -1. 

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1

 */

//REVIEW THIS:

function findFloor(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx > rightIdx) return -1;
    if (num >= arr[rightIdx]) return arr[rightIdx];
  
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
  
    if (arr[middleIdx] === num) return arr[middleIdx];
  
    if (middleIdx > 0 && arr[middleIdx - 1] <= num && num < arr[middleIdx]) {
      return arr[middleIdx - 1];
    }
  
    if (num < arr[middleIdx]) {
      return findFloor(arr, num, leftIdx, rightIdx - 1);
    }
  
    return findFloor(arr, num, middleIdx + 1, rightIdx)
  }


















// function findFloor() {
  
// }

// module.exports = findFloor