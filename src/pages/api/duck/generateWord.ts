import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/server/db";
import { duckWordsG } from "@/server/duckwords";

import corsMiddleware from "@/lib/init-middlewares";

interface RequestBody {
  sentence: string;
}

//const duckWordsGibberish: string[] = require("../../duckwords");


const handleError = (error: Error, message: string) => {
  console.error(error);
  throw new Error(`${message}: ${error.message}`);
}

// Array of words from the database
const duckWords: string[] = duckWordsG;
//const duckWords: string[] = ["baboo", "haiyo", "heeyah", "olah", "baruu", "zebada", "zofa"];

// Function to get the middle alphabets of a word
const getMiddleAlphabets = (word: string) => {
  const length = word.length;
  if (length <= 2) {
    return word; // Return the whole word if it's two characters or less
  }

  //const middleStart = Math.floor(length / 2) - 1;
  const middleStart = 1;
  //const middleEnd = length % 2 === 0 ? middleStart + 2 : middleStart + 1;
  const middleEnd = length - 1;
  return word.substring(middleStart, middleEnd);
}

// Function to find potential words based on length, start alphabet, and last alphabet
const findPotentialWords = (inputWord: string) => {
  const lowercaseInput = inputWord.toLowerCase();
  //console.log(duckWords, " duckwords");
  return duckWords.filter(word => {
    //let tempWord: string = word.toLowerCase();
    const firstAlphabet = word.match(/[a-zA-Z]/)?.[0] ?? "";

    if (lowercaseInput === undefined) {
      return false; // or handle the case when lowercaseInput is undefined
    }

    return (
      lowercaseInput.startsWith(firstAlphabet) &&
      lowercaseInput.slice(-1) === word.toLowerCase().slice(-1) &&
      Math.abs(word.length - (inputWord?.length || 0)) <= 5
    );
  });
}
// Function to calculate the matching percentage between input middle alphabets and potential word's middle alphabets
const calculateMatchingPercentage = (inputMiddle: string, matchingMiddle: string) => {
  const inputSet = new Set(inputMiddle);
  const matchingSet = new Set(matchingMiddle);

  const intersection = new Set([...inputSet].filter(char => matchingSet.has(char)));
  const matchingPercentage = (intersection.size / inputSet.size) * 100;

  return matchingPercentage;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await corsMiddleware(req, res);
  if (req.method === "POST") {
    const reqBody: RequestBody = req.body as RequestBody;

    try {
      const words: string[] = reqBody.sentence.split(" ");
      const results: string[] = [];

      for (const word of words) {
        const search = await db.word.findFirst({
          where: {
            humanWord: word,
          },
        });

        if (search) {
          results.push(search.duckWord); // Change to the appropriate field
        } else {


          // Function to print the potential word with the highest matching percentage
          const printHighestMatchingWord = async (oneWord: string) => {
            const result = oneWord;
            const resultAsString = result.replace(/"/g, '');

            try {
              const potentialWords = await Promise.resolve(findPotentialWords(resultAsString));



              console.log(resultAsString, "result");
              if (potentialWords.length > 0) {
                //console.log(`Potential words with the same start and end alphabet as "${resultAsString}":`);

                const inputMiddle = getMiddleAlphabets(resultAsString);

                let highestMatchingWord = '';
                let highestMatchingPercentage = 0;

                for (const word of potentialWords) {
                  const matchingMiddle = getMiddleAlphabets(word);
                  const matchingPercentage = calculateMatchingPercentage(inputMiddle, matchingMiddle);

                  if (matchingPercentage > highestMatchingPercentage) {
                    highestMatchingWord = word;
                    highestMatchingPercentage = matchingPercentage;
                  }
                }

                if (highestMatchingWord) {
                  //setDuckWord(highestMatchingWord);
                  console.log(`Highest matching word: ${highestMatchingWord}, Matching Middle Alphabets: [${[...getMiddleAlphabets(highestMatchingWord).split('')].join(', ')}], Matching Percentage: ${highestMatchingPercentage}%`);
                  results.push(highestMatchingWord);
                } else {
                  console.log(`No potential words 1 found for "${resultAsString}".`);
                  results.push(word);
                }
              } else {
                console.log(`No potential words 2 found for "${resultAsString}".`);
                results.push(word);
              }
            } catch (error) {
              console.error('New error idk promise error', error);
            }
          }

          // Example usage
          //const inputWord = "zebra";
          await printHighestMatchingWord(word);

        }
      }
      const updatedSentence = results.join(" ");
      console.log("UPDATE: " + updatedSentence);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
      res.setHeader('Access-Control-Allow-Headers', '*');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      return res.status(200).json({ sentence: updatedSentence });

    } catch (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(500).json({ error: "Invalid HTTP Method" });
  }
}