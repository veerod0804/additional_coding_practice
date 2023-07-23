function reverseString(string) {
    let splitString = string.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    return joinArray;
}

console.log(reverseString("Hello!"));