const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = matrix.reduce((value, item) => {
    return value + (item.reduce((value2, item2) => {
    return (item2 === "^^") ? value2 = value2 = value2 + 1 : value2 += 0;
    }, 0));
 }, 0)
 return count;
  // remove line with error and write your code here
};
