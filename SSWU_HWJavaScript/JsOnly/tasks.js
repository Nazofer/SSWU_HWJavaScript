'use strict';
const _ = require('lodash');
/*1 Ви повинні реалізувати функцію, яка повертає різницю між
найбільшим та найменшим значенням у списку , отриманому як аргумент
функції. Масив, який отримує функція як аргумент, може містити позитивні
та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
Спочатку масив буде поданий у невідсортованому вигляді.*/

const maxMinusMin = (array) => {
  const sortedArr = array.sort((a, b) => b - a);
  return array.length > 1 ? sortedArr[0] - sortedArr.at(-1) : 0;
};

//console.log(maxMinusMin([1, 2, 3, -4]));

const maxMinusMin_lodash = (arr) => {
  if (_.size(arr) <= 1) return 0;
  return _.max(arr) - _.min(arr);
};
// console.log(maxMinusMin_lodash([1, 2, 3, -4]));

/*2 Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
масиву тільки ті слова, довжина яких перевищує число.*/

const moreThan = (str, num) =>
  str.split(' ').filter((word) => word.length > num);

// console.log(moreThan('Я люблю джс', 4));

const moreThan_lodash = (str, length) => {
  return _(str)
    .words()
    .filter((word) => word.length > length)
    .value();
};
// console.log(moreThan_lodash('Я люблю джс', 4));
/*3 Напишіть функцію, яка повертає true, якщо перший переданий
аргумент (рядок) закінчується другим аргументом (також рядком).*/

const endsWith = (str, endStr) => str.endsWith(endStr);

//console.log(endsWith('SigmaSoftware', 'Software'));

const endsWith_lodash = (str, endStr) => _.endsWith(str, endStr);

// console.log(endsWith_lodash('SigmaSoftware', 'Software'));

/*4 Напишіть функцію, яка отримує масив цілих чисел і повертає масив
середніх значень кожного цілого числа та його послідовника, якщо він є.*/

const averages = (arr) => {
  if (arr.length < 2) console.error("There aren't enough values");
  return arr.reduce((acc, curr, i, arr) => {
    if (!arr[i + 1]) return acc;
    acc.push((curr + arr[i + 1]) / 2);
    return acc;
  }, []);
};

//console.log(averages([2]));

const averages_lodash = (arr) => {
  const evenArr = _.size(arr) % 2 !== 0 ? _.initial(arr) : arr;
  const pairs = _.zip(evenArr, _.tail(arr));
  return _.map(pairs, (pair) => _.mean(pair));
};

// console.log(averages_lodash([1, 3, 5, 1, -10]));
/*5 Створіть функцію, яка приймає рядок і повертає кількість (кількість)
голосних, які у ній.*/

const countVowels = (str) => str.match(/[aeyiuo]/gi).length;

//console.log(countVowels('Omae wa mou shindeiru'));

const removeABC = (str) => {
  if (!/[abc]/.test(str)) return null;
  return str.replace(/[abc]/gi, '');
};
// console.log(removeABC('SigmaSoftware'));
/*6 Напишіть JavaScript для пошуку унікальних елементів з двох масивів.*/

const difference = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

// console.log(difference([1, 2, 3, 4], [3, 4, 5, 6]));

const difference_lodash = (arr1, arr2) => _.union(arr1, arr2);

// console.log(difference_lodash([1, 2, 3, 4], [3, 4, 5, 6]));
/*7 Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
значеннями, а значення ключами.*/

const swapEntries = (obj) => {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (Object.hasOwn(obj, key)) {
      /*Перевіряю чи проперті об'єкта не успадковано, щоб уникнути небажаних
       побічних ефектів*/
      result[obj[key]] = key;
    }
  }
  return result;
};

// const input = { red: '#FF0000', green: '#00FF00', white: '#FFFFFF' };
// console.log(swapEntries(input));

/*8 Івана Іванова обікрали. Але його речі було застраховано на певну суму.
Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
загальною вартістю цих речей та межею політики.*/

const calculateDifference = (obj, insurance) => {
  return Object.keys(obj).reduce((acc, key) => acc + obj[key], 0) - insurance;
};

/*
console.log(
  calculateDifference(
    { 'baseball bat': 20, skate: 200, painting: 200, shoes: 1 },
    21
  )
);
*/
