// TODO: Напиши функцію checkForSpam(message), приймаючу 1 параметр message - рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) {
  const words = message.toLowerCase().split(" ")
  const result = words.includes('sale') || words.includes('spam');
  return result;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("SPAM How to earn fast money?")); // true
