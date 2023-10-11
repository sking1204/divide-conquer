/* Write a function called ***findRotationCount*** which accepts an array of distinct numbers 
sorted in increasing order. The array has been rotated counter-clockwise n number of times.
 Given such an array, find the value of n.

**Constraints**:

Time Complexity: O(log N)

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0 

*/

//REVIEW THIS!!

function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length - 1, rotationCount = 0) {
    if (rightIdx <= leftIdx) {
      // Return both the rotation count and the index of the minimum element
      return { rotationCount, minvalueindex: leftIdx };
    }
  
    // Calculate the middle index
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
  
    // Check if element (mid+1) is the minimum element
    if (middleIdx < rightIdx && arr[middleIdx + 1] < arr[middleIdx]) {
      rotationCount = middleIdx + 1;
      return { rotationCount, minvalueidx: middleIdx + 1 };
    }
  
    // Check if mid itself is the minimum element
    if (middleIdx > leftIdx && arr[middleIdx] < arr[middleIdx - 1]) {
      rotationCount = middleIdx;
      return { rotationCount, minvalueindex: middleIdx };
    }
  
    // Decide whether to go to the left half or right half
    if (arr[rightIdx] > arr[middleIdx]) {
      return findRotationCount(arr, leftIdx, middleIdx - 1, rotationCount);
    }
  
    return findRotationCount(arr, middleIdx + 1, rightIdx, rotationCount);
  }




// Take 1:
// function findRotationCount(arr){
// let leftIdx  = 0;
// let rightIdx= arr.length - 1;
//     if (rightIdx > leftIdx) return 0;
//     if (rightIdx === leftIdx) return leftIdx;
//     let middleIdx = Math.floor((rightIdx + leftIdx) / 2)
  
//     // Check if element (mid+1) is minimum element.
//     // Consider the cases like [3, 4, 5, 1, 2]
//     if (middleIdx < rightIdx && arr[middleIdx + 1] < arr[middleIdx])
//       return middleIdx + 1;
  
//     // Check if mid itself is minimum element
//     if (middleIdx > rightIdx && arr[middleIdx] < arr[middleIdx - 1]) {
//       return middleIdx;
//     }
  
    
//   }

  /* From chat gpt */
  function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length - 1, rotationCount = 0) {
    if (rightIdx <= leftIdx) {
      // Return both the rotation count and the index of the minimum element
      return { rotationCount, minvalueindex: leftIdx };
    }
  
    // Calculate the middle index
    let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
  
    // Check if element (mid+1) is the minimum element
    if (middleIdx < rightIdx && arr[middleIdx + 1] < arr[middleIdx]) {
      rotationCount = middleIdx + 1;
      return { rotationCount, minvalueidx: middleIdx + 1 };
    }
  
    // Check if mid itself is the minimum element
    if (middleIdx > leftIdx && arr[middleIdx] < arr[middleIdx - 1]) {
      rotationCount = middleIdx;
      return { rotationCount, minvalueindex: middleIdx };
    }
  
    // Decide whether to go to the left half or right half
    if (arr[rightIdx] > arr[middleIdx]) {
      return findRotationCount(arr, leftIdx, middleIdx - 1, rotationCount);
    }
  
    return findRotationCount(arr, middleIdx + 1, rightIdx, rotationCount);
  }
  
  // Example usage:
//   const arr = [7, 9, 11, 12, 15, 18, 2, 5];
//   const result = findRotationCount(arr);
//   console.log(`Array rotated ${result.rotationCount} times. Minimum element at index ${result.index}`);
  




// function findRotationCount(arr, low = 0, high = arr.length - 1) {
//     if (high < low) return 0;
//     if (high === low) return low;
//     let mid = Math.floor((low + high) / 2)
  
//     // Check if element (mid+1) is minimum element.
//     // Consider the cases like [3, 4, 5, 1, 2]
//     if (mid < high && arr[mid + 1] < arr[mid])
//       return mid + 1;
  
//     // Check if mid itself is minimum element
//     if (mid > low && arr[mid] < arr[mid - 1]) {
//       return mid;
//     }
  
//     // Decide whether we need to go to left half or
//     // right half
//     if (arr[high] > arr[mid]) {
//       return findRotationCount(arr, low, mid - 1);
//     }
  
//     return findRotationCount(arr, mid + 1, high);
//   }






















// function findRotationCount() {
  
// }

// module.exports = findRotationCount