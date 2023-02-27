'use strict';

const _ = require('lodash');
/*11 Дано два рядки. Чи можна перший рядок отримати з другого циклічним
зрушенням?*/

const isCycled = (str1, str2) => {
  return str1.length === str2.length && str2.repeat(2).includes(str1);
};

// const str1 = 'SigmaSoftware';
// const str2 = 'oftwareSigmaS';
// console.log(isCycled(str1, str2));
const isCycled_lodash = (str1, str2) => {
  if (_.size(str1) !== _.size(str2)) return false;
  return _(str2).repeat(2).includes(str1);
};
// const isCycled_lodash = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
 
//   for (let i = 0; i < str1.length; i++) {
//     if (_.isEqual(str1, str2)) return true;
//     str2 = _.concat(_.tail(str2), str2[0]).join('');
//     console.log(str2);
//   }

//   return false;
// };


const str1 = 'oftwareSigmaS';
const str2 = 'SigmaSoftware';
console.log(isCycled_lodash(str1, str2));
