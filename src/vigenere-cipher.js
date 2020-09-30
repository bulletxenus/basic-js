const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean) {
    this.isReverse = boolean;    
  }

  encrypt(message, key) {
    const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let newMess = message.toUpperCase().split("");
    let newKey = key.toUpperCase().split("");
    let count = 0;

    newMess.map((a)=> ALPHABET.includes(a) ? count++ : "");

    if (count > newKey.length) {
      let i = 0;
      while (newKey.length < count) {
        newKey.push(newKey[i]);
        i++;
      }
    }
    for (let i = 0; i < newMess.length; i++) {
      let Alpha = ALPHABET.slice();

      if (ALPHABET.indexOf(newMess[i]) == -1) {
        newMess[i] = newMess[i];
        newKey.unshift(" ")
        continue;
      }
      let indMes = ALPHABET.indexOf(newMess[i]);
      let indKey = ALPHABET.indexOf(newKey[i]);        
      let newAlpha = Alpha.slice(0, indKey);
      Alpha.splice(0, indKey);
      let newALPHABET = Alpha.concat(newAlpha);
      newMess[i] = newALPHABET[indMes];        
    }
    return this.isReverse || this.isReverse === undefined ? newMess.join("") : newMess.reverse().join("");
  }   

  decrypt(message, key) {
    const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let newMess = message.toUpperCase().split("");
    let newKey = key.toUpperCase().split("");
    let count = 0;

    newMess.map((a)=> ALPHABET.includes(a) ? count++ : "");

    if (count > newKey.length) {
      let i = 0;
      while (newKey.length < count) {
        newKey.push(newKey[i]);
        i++;
      }
    }

    for (let i = 0; i < newMess.length; i++) {

      let Alpha = ALPHABET.slice();

      if (ALPHABET.indexOf(newMess[i]) == -1) {
        newMess[i] = newMess[i];
        newKey.unshift(" ")
        continue;
      }
      let indKey = ALPHABET.indexOf(newKey[i]);        
      let newAlpha = Alpha.slice(0, indKey);
      Alpha.splice(0, indKey);
      let newALPHABET = Alpha.concat(newAlpha);
      let indMes = newALPHABET.indexOf(newMess[i]);        
      newMess[i] = ALPHABET[indMes];        
    }
    return this.isReverse || this.isReverse === undefined ? newMess.join("") : newMess.reverse().join("");
  }   
}


module.exports = VigenereCipheringMachine;
