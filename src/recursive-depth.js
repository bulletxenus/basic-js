const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        let max = 1;
        if (Array.isArray(arr[i])) {
            max = max + this.calculateDepth(arr[i]);
        }
        if (max > count) {
            count = max;
        }
    }
    return count;
}
}
