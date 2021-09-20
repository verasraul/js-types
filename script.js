/**
 * All of your answers should be stored in
 * variables matching the question number (q1, q2, etc.)
 */

/**
 * EXAMPLE
 * QUESTION 1
 * Assign q1 a value of type boolean
 */

const q1 = false;

/**
 * QUESTION 2
 * Assign q2 a value of type number
 */
const q2 = 2;


/**
 * QUESTION 3
 * Assign q3 a value of type string
 */
const q3 = "Hello";


/**
 * QUESTION 4
 * Assign q4 a value of NaN (not a number). Produce NaN by performing
 * an operation where neither of the operands are NaN
 * (i.e. `const q4` = NaN * 5 does not count)
 */



const q4 = "2 + 2 = 4";


/**
 * QUESTION 5
 * Assign q5 a value of type boolean. Produce the value by performing
 * a comparison operation on two numbers.
 */
const q5 = 4 > 2; 


/**
 * QUESTION 6
 * Assign q6 a falsey value that is not the boolean false
 */
const q6 = 0 > 4;   

/**
 * For use in the next few questions, 
 * here's the text of the Gettsyburg Address.
 */
const address = `
Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.
But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.
`
/**
 * QUESTION 7
 * 
 * Assign a version of the Gettysburg address converted to all capital letters.
 */
const q7 = address.toUpperCase();

/**
 * QUESTION 8
 * Assign the number of characters in the Gettysburg Address
 */
const q8 = address.length;

/**
 * QUESTION 9
 * Assign the result of splitting the Gettysburg Address on spaces
 * (use the same variable `address` to get started)
 */
const q9 = address.split(" "); 


/**
 * QUESTION 10
 * Assign q9 the number of words in the Gettysburg Address
 * (use your answer from above)
 */
const q10 = q9.length; 


/**
 * QUESTION 11
 * The array created in question 9 includes periods.
 * Loop over that array and build a new array with the periods (.)
 * removed from each word. Assign q11 the result.
 */
 const regularArray = [];
 const noPeriod = [];
 
 // Create new array from q9
 for (let i = 0; i < q9.length; i++) {
     regularArray.push(q9[i]);
 }
 // Create new arrray without periods.
 for (let i = 0; i < regularArray.length; i++){
   noPeriod.push(regularArray[i].replaceAll(".", ""));
 }
const q11 = noPeriod;


/**
 * QUESTION 12
 * The array created in question 11 is each word of the Gettysburg Address
 * with no punctuation. Loop over that array and create a new array of each
 * word's length. Assign q11 the result.
 */
 const noSpaces = [];
 const wordLength = [];
 
//  for (let i = 0; i < q11.length; i++){
//    noSpaces.push(q11[i].trim());
//  }
 
 for (let i = 0; i < q11.length; i++){
   wordLength.push([q11[i].length]);
 }
 
 const q12 = wordLength;


/**
 * QUESTION 13
 * Using the array created in question twelve, calculate the average word length
 * the Gettysburg address. Assign q13 the result.
 */
 let allvalues = 0;
 let keyavg = 0
 q12.forEach(addFunction);
 
 function addFunction(keyvalue) {
   allvalues += keyvalue;
   keyavg = allvalues / q10
 }

const q13 = keyavg;


module.exports = {
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13
};