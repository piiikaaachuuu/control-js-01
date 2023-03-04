// TODO: Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
  const stringWords = string.split(" ");
  let maxNum = 0;
  let MaxWord = "";

  for (let word of stringWords) {
    if (word.length > maxNum) {
      maxNum = word.length;
      MaxWord = word;
    }
  }
  return MaxWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
