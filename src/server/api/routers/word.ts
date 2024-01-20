import { z } from "zod";
import { db } from "@/server/db";
import { duckWordsG } from "@/server/duckwords";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "@/server/api/trpc";

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


export const wordRouter = createTRPCRouter({

  // findMatchingWordHTD: publicProcedure.query(async ({ input, ctx }) => {
  //     try {
  //         const word = await db.word.findUniqueOrThrow({
  //             where: {
  //                 humanWord: input,
  //             },
  //         });
  //         return word;
  //     } catch (err) {
  //         handleError(err as Error, "Failed to find matching word");
  //     }
  // }),

  // getMatchingWordHTD: protectedProcedure
  //     .input(
  //         z.object({
  //             sentence: z.string(),
  //         }),
  //     )
  //     .mutation(async ({ input }) => {
  //         try {
  //             const form = await db.word.findFirst({
  //                 where: {
  //                     humanWord: input.sentence,
  //                 },
  //             });
  //             return form;
  //         } catch (err) {
  //             handleError(err as Error, "Failed to find matching word");
  //         }
  //     }),

  getMatchingWordHTD: protectedProcedure
    .input(
      z.object({
        sentence: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const words = input.sentence.split(' ');
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
        const updatedSentence = results.join(' ');
        return { sentence: updatedSentence };

      } catch (err) {
        handleError(err as Error, "Failed to find matching words");
      }
    }),

  getMatchingWordDTH: protectedProcedure
    .input(
      z.object({
        sentence: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        const words = input.sentence.split(' ');
        const results: string[] = [];

        for (const word of words) {
          const search = await db.word.findMany({
            where: {
              duckWord: word,
            },
          });

          if (search && search.length > 0) {
            results.push(search?.[Math.floor(Math.random() * search.length)]?.humanWord ?? word);
          } else {
            results.push(word);
          }
        }

        const updatedSentence = results.join(' ');
        return { sentence: updatedSentence };
      } catch (err) {
        handleError(err as Error, "Failed to find matching words");
      }
    }),



  // getMatchingWordDTH: protectedProcedure
  //     .input(
  //         z.object({
  //             sentence: z.string(),
  //         }),
  //     )
  //     .mutation(async ({ input }) => {
  //         try {
  //             const form = await db.word.findMany({
  //                 where: {
  //                     duckWord: input.sentence,
  //                 },
  //             });
  //             return form;
  //         } catch (err) {
  //             handleError(err as Error, "Failed to find matching word");
  //         }
  //     }),

  // getMatchingWord: protectedProcedure
  //     .input(
  //         z.object({
  //             language: z.enum(["human", "duck"]),
  //             word: z.string(),
  //         }),
  //     )
  //     .query(async ({ input, ctx }) => {
  //         try {
  //             const condition = input.language === "human"
  //                 ? { humanWord: input.word }
  //                 : { duckWord: input.word };

  //             const form = await db.word.findFirst({
  //                 where: condition,
  //             });

  //             return form;
  //         } catch (err) {
  //             handleError(err as Error, "Failed to find matching word");
  //         }
  //     }),
});
