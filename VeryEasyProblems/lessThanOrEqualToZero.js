// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true
function lessThanOrEqualToZero(number) {
if (number <= 0) {
    return true;
} else {
    return false;
}
}

console.log(lessThanOrEqualToZero(-2));