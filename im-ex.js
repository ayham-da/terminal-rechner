const sum = require('./node');


function avg(numArray) {
    return sum(numArray) / numArray.length
}

module.exports= avg;