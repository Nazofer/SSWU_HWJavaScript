'use strict';
const _ = require('lodash');

const shuffle = (arr) => {
  const arr1 = [],
    arr2 = [];
  let min;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(...arr.slice(i));
    if (i % 2 === 0) arr1.push(min);  
    else arr2.unshift(min);
  }
  console.log(arr);
  return arr1.concat(arr2);
};

// console.log(shuffle([1, 2, 3, 4, 5]));

const shuffle_lodash = (arr) => {
  const sortedArr = _.sortBy(arr);
  const evenIndexes = _.range(0, _.size(sortedArr), 2);
  const extracted = _.pullAt(sortedArr, evenIndexes);
  return _.concat(extracted, _.reverse(sortedArr));
};

console.log(shuffle_lodash([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
