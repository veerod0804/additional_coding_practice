// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

function canArrayBeNested(arrayOne, arrayTwo) {
    let arrayOneMin = arrayOne[0];
    let arrayTwoMin = arrayTwo[0];
    let arrayOneMax = arrayOne[0];
    let arrayTwoMax = arrayTwo[0];
    //if arrayOne can be nested inside array one return true

for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[0] < arrayOne[i]) {
        arrayOneMin === arrayOne[i];
    }
    if (arrayOne[i] > arrayOne[0]) {
        arrayOneMax === arrayOne[i];
    }
}

for (let i = 0; i < arrayTwo.length; i++) {
    if (arrayTwo[i] < arrayTwo[0]) {
        arrayTwoMin === arrayTwo[i];
    }
    if (arrayTwo[i] > arrayTwo[0]) {
        arrayTwoMax === arrayTwo[i];
    }
}
console.log(arrayTwoMax);
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
if ((arrayOneMin > arrayTwoMin) && (arrayOneMax < arrayTwoMax)) {
return true;
} else {
    return false;
}

}

console.log(canArrayBeNested([1, 2, 3, 4], [0, 6]));

