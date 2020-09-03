const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 
  turns = Math.pow(2, disksNumber) - 1;
  
  seconds =  Math.floor(turns/(turnsSpeed/3600));

  return {turns, seconds};
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
