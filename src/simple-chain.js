const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
     if (value === undefined) this.chain.push("(  )");
     else {
         this.chain.push("( " + value + " )") ;
     }
     return this;
  },
  removeLink(position) {
      if (!/^[0-9]$/ig.test(position)) {
          this.chain = [];
          throw Error;
      }
     this.chain.splice(position-1, 1);
      return this;
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let newChain = this.chain.join("~~");
      this.chain = [];
      return newChain;
  },
};

module.exports = chainMaker;
