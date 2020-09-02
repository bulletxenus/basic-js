const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) {
    return false;
  }
  let stringName = "";
  let nameArr = members.filter(item => typeof(item) === "string");
  for (let i = 0; i < nameArr.length; i++) {
    stringName += nameArr[i].toString().trim().slice(0,1);
  }
  return stringName.toUpperCase().split("").sort().join("");
};

