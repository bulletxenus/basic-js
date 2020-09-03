const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) {
		return 'Unable to determine the time of year!';
	}
	const month = date.getMonth();
	if (Object.prototype.toString.call(date) === '[object Date]') {
    if (month == 0 || month == 1 || month == 11) return "winter";
    else if (month == 2 || month == 3 || month == 4 ) return "spring";
    else if (month == 5 || month == 6 || month == 7) return "summer";
    else if (month == 8 || month == 9 || month == 10) return "autumn";
	} else {
		throw new Error();
	}
}
