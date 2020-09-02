const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return typeof(sampleActivity) === "string" && /^[0-9]*[\.]{0,1}[0-9]*[\.]{0,1}[0-9]*$/g.test(sampleActivity) ? parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) <= 15 ? (Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD))) : false : false;
};

