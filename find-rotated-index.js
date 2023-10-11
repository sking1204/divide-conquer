/* Write a function called ***findRotatedIndex*** which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

**Constraints**:

Time Complexity: O(log N) 

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1





*/

//REVIEW findRotaedIndex function:

function findRotatedIndex(array, num) {
    var pivot = findPivot(array);
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      return binarySearch(array, num, 0, pivot - 1);
    } else {
      return binarySearch(array, num, pivot, array.length - 1);
    }
  }
  
  function binarySearch(arr, target, leftIdx, rightIdx) {
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
      if (middleVal < target) {
        leftIdx = middleIdx + 1;
      } else if (middleVal > target) {
        rightIdx = middleIdx - 1;
      } else {
        return middleIdx;
      }
    }
    return -1;
  }
  
  function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (arr[mid] > arr[mid + 1]) return mid + 1;
      else if (arr[start] <= arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return 0; // Added return statement in case the array is not rotated
  }

  //Take1:

// function findRotatedIndex(array, num) {
//     var pivot = findPivot(array)
//     if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
//       return binarySearch(array, num, 0, pivot - 1);
//     } else {
//       return binarySearch(array, num, pivot, array.length - 1);
//     }
//   }








// function binarySearch(arr,target){
//     let leftIdx=0;
//     let rightIdx = arr.length -1;
//     while(leftIdx <= rightIdx){
// //middleIdx is the average of leftidx and rightidx
//         let middleIdx = Math.floor((leftIdx+rightIdx)/2)
//         let middleVal= arr[middleIdx];
//         if(middleVal < target){
//             leftIdx = middleIdx + 1;
//         } else if (middleVal > target){
//             rightIdx = middleIdx -1;
//         }else{
//             return middleIdx;
//         }             
//     }
//     return -1;       
// }

// function findPivot(arr) {
//     if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//     var start = 0
//     var end = arr.length - 1;
//     while (start <= end) {
//       var mid = Math.floor((start + end) / 2);
//       if (arr[mid] > arr[mid + 1]) return mid + 1
//       else if (arr[start] <= arr[mid]) {
//         start = mid + 1
//       } else {
//         end = mid - 1
//       }
//     }
//   }


  //from chatgpt:

//   function findRotatedIndex(array, num) {
//     var pivot = findPivot(array);
//     if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
//       return binarySearch(array, num, 0, pivot - 1);
//     } else {
//       return binarySearch(array, num, pivot, array.length - 1);
//     }
//   }
  
//   function binarySearch(arr, target, leftIdx, rightIdx) {
//     while (leftIdx <= rightIdx) {
//       let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//       let middleVal = arr[middleIdx];
//       if (middleVal < target) {
//         leftIdx = middleIdx + 1;
//       } else if (middleVal > target) {
//         rightIdx = middleIdx - 1;
//       } else {
//         return middleIdx;
//       }
//     }
//     return -1;
//   }
  
//   function findPivot(arr) {
//     if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
//     var start = 0;
//     var end = arr.length - 1;
//     while (start <= end) {
//       var mid = Math.floor((start + end) / 2);
//       if (arr[mid] > arr[mid + 1]) return mid + 1;
//       else if (arr[start] <= arr[mid]) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     }
//     return 0; // Added return statement in case the array is not rotated
//   }
  
//   var array = [6, 7, 8, 9, 1, 2, 3, 4];
//   var num = 3;
//   var result = findRotatedIndex(array, num);
//   console.log(result);
  















// function findRotatedIndex() {
 
// }

// module.exports = findRotatedIndex