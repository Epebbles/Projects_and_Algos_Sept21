//Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

// function pushFront(arr, val) {
//     var temp1 = arr[0], temp2 = arr[1];
//     for (var i=0; i < arr.length && temp1 != undefined; i++) {
//         arr[i+1] = temp1;
//         temp1 = temp2;
//         temp2 = arr[i+2];
//     }
//     arr[0] = val;
// }

// var myArr = [1,5,2,0]
// pushFront(myArr, 4);
// console.log(myArr);


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

// function popFront(arr) {
//     var returnIdx = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         arr[i-1] = arr[i];
//     }
//     arr.pop();
//     return returnIdx;
// }

// var myArr = [1,5,8,4,3];
// var results = popFront(myArr);
// console.log(results);
// console.log(myArr);



// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// function insertAt(arr, idx, val) {
//     for (var i = arr.length - 1; i >= idx; i--) {
//         arr[i+1] = arr[i];
//     }
//     arr[idx] = val;

// }
// var myArr = [1,4,7,2,5];
// insertAt(myArr,5,2);
// console.log(myArr);

// Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

// function removeAt(arr, idx) {
//     var returnIdx = arr[idx];
//     for (var i = idx + 1; i < arr.length; i++) {
//         arr[i-1] = arr[i];
//     }
//     arr.pop();
//     return returnIdx;
// }

// var myArr = [2,5,9,0,1];
// var results = removeAt(myArr, 3);
// console.log(myArr);
// console.log(results);


// Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

// function swapPairs(arr) {
//     for (var i = 0; i < arr.length -1; i+=2) {
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// }

// var myArr = [1,2,3,4,5,7];
// swapPairs(myArr);
// console.log(myArr);



// Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.


// Second: Solve this without using any nested loops.