// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

function findWordInCrowd(phraseToSolve) {
    let hiddenWord = '';
    for (let i = 0; i < phraseToSolve.length; i++) {
        if (phraseToSolve[i] === phraseToSolve[i].toLowerCase()) {
            hiddenWord += phraseToSolve[i];
        }
    }
    return hiddenWord;
}

console.log(findWordInCrowd("UcUNFYGaFYFYGtNUH"));