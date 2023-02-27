'use strict';

const _ = require('lodash');

const a = [3, 7, 1, 9, 2, 5, 6, 4];
const b = [],
  c = [];

const divideArray = (array) => {
  array.sort((x, y) => x - y);
  const diffArr = array.reduce((acc, curr, i, arr) => {
    if (!arr[i + 1]) return acc;
    acc.push(Math.abs(curr - arr[i + 1]));
    return acc;
  }, []);
  const minDiff = diffArr.indexOf(Math.min(...diffArr));
  b.push(array[minDiff]);
  c.push(array[minDiff + 1]);
  array.splice(minDiff, 2);

  if (array.length > 0) {
    divideArray(array);
  }
};

divideArray(a);
// console.log(b);
// console.log(c);

const divideArray_lodash = (array) => {
  array = _.orderBy(array);
  const diffArr = _.initial(_.map(array, (num, i, arr) => {
    if (i === _.lastIndexOf(array)) return;
    return Math.abs(num - arr[i + 1]);
  }));
  
  const minDiffIndex = _.indexOf(diffArr, _.min(diffArr));
  const b = _.pullAt(array, minDiffIndex);
  const c = _.pullAt(array, minDiffIndex);

  if (_.size(array) > 0) {
    const [b_rest, c_rest] = divideArray_lodash(array);
    b.push(...b_rest);
    c.push(...c_rest);
  }

  return [b, c];
};

console.log(divideArray_lodash([3, 7, 1, 9, 2, 5, 6, 4])); 


