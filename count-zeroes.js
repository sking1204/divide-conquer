/* 
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called ***countZeroes***, which returns the number of zeroes in the array.

**Constraints**:

Time Complexity: O(log N)

Examples:
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

*/

// Take 3- Final:

function countZeroes(arr) {
    // add whatever parameters you deem necessary - good luck!
    let firstZero = findFirst(arr)
    console.log(`First zero found at index ${firstZero}`)     
    if (firstZero === -1) {
        console.log(`No zeros in array.`)
        return 0 ;
    }
  
    return `${arr.length - firstZero} zeros found in array`
  }



//from chat gpt:
function findFirst(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) { // Change >= to <=
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal > 0) {
            leftIdx = middleIdx + 1;
        } else if (middleVal === 0) {
            if (middleIdx === 0 || arr[middleIdx - 1] !== 0) {
                return middleIdx;
            } else {
                rightIdx = middleIdx - 1; // Move the search to the left half
            }
        }
    }

    return -1; // Return -1 if 0 is not found in the array
}
  


//Take 1:
//   function findFirst(arr){
//     let leftIdx =0;
//     let rightIdx = arr.length-1;    
//     let middleIdx = Math.floor((leftIdx+rightIdx)/2)   
//     let middleVal = arr[middleIdx]  
//     console.log(`Middle Value is ${middleVal}`)
//     console.log(`Middle Index is ${middleIdx}`)

//     }        

//   findFirst([1,1,1,1,0,0])

 //       M
  // [1,1,1,1,0,0]

// index of 2 should be middle


//Take 2: Not working correctly....
// function findFirst(arr){
//     let leftIdx =0;
//     let rightIdx = arr.length-1;
//     while(leftIdx <= rightIdx)    {
//         let middleIdx = Math.floor((leftIdx+rightIdx)/2);
//         let middleVal = arr[middleIdx];
//         if(middleVal > 0 ){
//             leftIdx = middleIdx + 1;
//         }else if(middleVal === 0){
//             return middleIdx;
//         }

//     }
// console.log(`Middle Value is ${middleVal}`)
// console.log(`Middle Index is ${middleIdx}`)

// }        

// findFirst([1,1,1,1,0,0])





// const result = findFirst(arr);
// if (result !== -1) {
//     console.log(`First instance of 0 is at index ${result}`);
// } else {
//     console.log("0 is not found in the array");
// }


/*Take 2 changes:

Changed the condition in the while loop from leftIdx >= rightIdx to leftIdx <= rightIdx to make the loop work correctly.

Added a condition to check if the current element is 0 and also if the previous element (if it exists) is not 0. This ensures that you find the first instance of 0 in the array.

If the middle value is greater than 0, move the search to the right half of the array; otherwise, move to the left half as necessary.

Added a return statement outside the loop to return -1 if 0 is not found in the array.

Now, when you call findFirst([1, 1, 1, 1, 0, 0]), it will correctly return the index of the first instance of 0 or -1 if 0 is not found.  */












       
     
   






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











// module.exports = countZeroes