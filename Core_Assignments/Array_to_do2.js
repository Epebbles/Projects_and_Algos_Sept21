//Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().


// function reverseArr(arr) {
//     var n = arr.length-1;
//     for (var i = 0; i <= n/2; i++){
//         var temp = arr[i];
//         arr[i] = arr[n-i];
//         arr[n-i] = temp;
//     }
// }

// var myArr = [1,2,3,4,5,6,7];
// reverseArr(myArr);
// console.log(myArr);

//Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy) {
    if (shiftBy > 0) {
        for( var i = 0; i < shiftBy; i++) {
            var temp = arr[arr.length - 1];
            for (var z = arr.length -2; z >= 0; z--) {
                arr[z+1] = arr[z];
            }
            arr[0] = temp;
        }
    } else {
        var rotateLeft = Math.abs(shiftBy);
        for( var i = 0; i < rotateLeft; i++) {
            var temp = arr[0];
            for (var z = 1; z < arr.length; z++) {
                arr[z-1] = arr[z];
            }
            arr[arr.length - 1] = temp;
        }
    }
}
var myArr = [1,2,3];
rotateArr(myArr, -1);
console.log(myArr);