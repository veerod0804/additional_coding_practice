// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 
// See step 1, 2 and 3 in the image above.

// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21
// matchHouses(87) ➞ 436

function matchstickHouses(step) {
    let sumMatches = 0;
    let starterHouse = 6;
    let addHome = 5;

    for (let i = 1; i < step; i++) {
        sumMatches += addHome;
    }
    return sumMatches + starterHouse;
}
console.log(matchstickHouses(87));