'use strict';

/*10 Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
\WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
без розширення.*/

const pathWindows = 'D:\\projects\\SSWU_HWJavaScript\\10task.js';
const pathLinux = '/home/nazar/projects/web/SSWU_HWJavaScript/10task.js';

const getFileName = (path) => {
  const separator = path.includes('\\') ? '\\' : '/';
  return path.slice(path.lastIndexOf(separator) + 1, path.lastIndexOf('.'));
};
console.log(getFileName(pathLinux));
console.log(getFileName(pathWindows));
