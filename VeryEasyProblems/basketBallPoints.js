// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
// find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100

function basketBallPoints(twopointers, threepointers) {
    let pointtotal = ((twopointers * 2) + (threepointers * 3));
    return pointtotal;
}
console.log(basketBallPoints(38, 8));