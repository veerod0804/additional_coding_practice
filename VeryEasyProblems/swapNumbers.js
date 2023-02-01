// Mubashir wants to swap two given numbers!

// It is not returning the right values. Can you help him fix it?

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"
function swap(a, b) {
    // b = a;
    // a = b;
    return [b, a];
}
console.log(swap(100, 200))