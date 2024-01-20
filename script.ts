function matchDuckWord(duckWord: string, word: string): boolean {
    if (duckWord.length !== word.length) {
        return false;
    }

    // Check if the first and last letters are the same
    if (duckWord[0] !== word[0] || duckWord.slice(-1) !== word.slice(-1)) {
        return false;
    }

    // Calculate the number of in-between letters to match
    const numToMatch = Math.floor(duckWord.length / 2);

    // Check if at least 50% of the in-between letters match
    const matchedCount = Array.from(duckWord.slice(1, -1)).reduce(
        (count, letter, index) => (letter === word[index + 1] ? count + 1 : count),
        0
    );

    return matchedCount >= numToMatch;
}

// Example usage
const duckWord = "haste";
const wordsDatabase = ["haste", "quek", "quee", "colgate", "clio", "baboo", "biuu"];

const matchingWords = wordsDatabase.filter((word) => matchDuckWord(duckWord, word));
console.log("Matching words:", matchingWords);
