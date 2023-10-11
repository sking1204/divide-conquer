/* Given a sorted array and a number, write a function called ***sortedFrequency*** that counts the occurrences of the number in the array

**Constraints**:

Time Complexity: O(log N)

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1 

*/

//Review this!!


function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
  }





function findFirst(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) { // Change >= to <=
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === num) {
            if (middleIdx === 0 || arr[middleIdx - 1] !== num) {
                return middleIdx;
            } else {
                rightIdx = middleIdx - 1;
            }
        } else if (middleVal < num) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }

    return -1;
}

function findLast(arr, num) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let lastIdx = -1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === num) {
            lastIdx = middleIdx;  // Update the last index found
            leftIdx = middleIdx + 1;  // Move to the right to find the last occurrence
        } else if (middleVal < num) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }

    return lastIdx;
}

//Take 1
// function findFirst(arr, num) {
    
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;

//     while (leftIdx >= rightIdx) { 
//         let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//         let middleVal = arr[middleIdx];
//         if((middleIdx ===0 || num > middleVal -1) && middleVal === num){
//             return middleIdx;
//         }else {
//             rightIdx = middleIdx -1;
//         }
//         }
//         return -1;
//         }

//From chat gpt:
// function findFirst(arr, num) {
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;

//     while (leftIdx <= rightIdx) { // Change >= to <=
//         let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//         let middleVal = arr[middleIdx];

//         if (middleVal === num) {
//             if (middleIdx === 0 || arr[middleIdx - 1] !== num) {
//                 return middleIdx;
//             } else {
//                 rightIdx = middleIdx - 1;
//             }
//         } else if (middleVal < num) {
//             leftIdx = middleIdx + 1;
//         } else {
//             rightIdx = middleIdx - 1;
//         }
//     }

//     return -1;
// }

// Example usage:
// const arr = [1, 2, 2, 3, 4, 4, 4, 5];
// const num = 4;
// console.log(findFirst(arr, num)); // Output: 4

//Take 1 Find last:
// function findFirst(arr, num) {
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;

//     while (leftIdx <= rightIdx) { // Change >= to <=
//         let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//         let middleVal = arr[middleIdx]; 
//         if (middleVal === num) {
//             if ((middleIdx === arr.length-1 || num < middleIdx -1) && middleVal === num) {
//                 return middleIdx;
                
//             } else (
//                 rightIdx = middleIdx +1
//             )

//         }else if (middleVal < num){
//             leftIdx = middleIdx +1;
//         }else{
//             rightIdx = middleIdx-1;
//         }

//     }
//     return -1;
// }
         

//From chatgpt:

// function findLast(arr, num) {
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;
//     let lastIdx = -1;

//     while (leftIdx <= rightIdx) {
//         let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//         let middleVal = arr[middleIdx];

//         if (middleVal === num) {
//             lastIdx = middleIdx;  // Update the last index found
//             leftIdx = middleIdx + 1;  // Move to the right to find the last occurrence
//         } else if (middleVal < num) {
//             leftIdx = middleIdx + 1;
//         } else {
//             rightIdx = middleIdx - 1;
//         }
//     }

//     return lastIdx;
// }

/* Here are the changes made:

Renamed the function to findLast to indicate that it finds the last occurrence.
Added a lastIdx variable to keep track of the last index where the number is found. Initialize it to -1.
When you find the number in the array (when middleVal === num), update lastIdx to the current middleIdx and then move to the right side of the array by updating leftIdx to middleIdx + 1. This ensures that you continue searching for the last occurrence.
With these changes, the function should correctly find the index of the last occurrence of the given number in the sorted array.

 */





































// function sortedFrequency() {

// }

// module.exports = sortedFrequency