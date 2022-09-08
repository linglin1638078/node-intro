const firstVar = 'Hello';
const secondVar = 'World';

//shorthand of firstVar:firstVar;
const tobeExported = {
    firstVar,
    secondVar
}

for (var i = 0; i < 10; i++){
    tobeExported[i] = `Value is: ${i}`;
}

//most likely we will export an object
module.exports = {
    firstVar: firstVar,
    secondVar: secondVar
};//sending out module

module.exports = tobeExported;