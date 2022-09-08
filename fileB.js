const exportedFromFileA = require('./fileA');//everything after module.exports in fileA will not be transfered to file B
console.log('firstVar', exportedFromFileA.firstVar);//no matter what we exported, it will run through everything in that file
console.log('secondVar', exportedFromFileA.secondVar);

console.log(exportedFromFileA);