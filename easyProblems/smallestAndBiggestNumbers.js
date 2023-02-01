// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.

function minMax(numberArray) {
    let min = numberArray[0];
    let max = numberArray[0];

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] < min) {
            min = numberArray[i];
        }
        if (numberArray[i] > max) {
            max = numberArray[i];
        }
    }
    console.log(min, max);

}
minMax([1, 2, 3, 4, 5]);