
 

 
 const args = process.argv.slice(2)
 const operation = args[0]
 const numbers = args.slice(1)

// const { sum ,avg} = require('./node'); true
// const ops = require('./node');  ops sum لازم نكتب قبل
// if(operation == "sum"){
//     console.log(ops.sum(numbers))
// }else if(operation == "avg") {
//     console.log(ops.avg(numbers))
// } else {
//     console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
// } 
const sum = require('./node');
 const avg = require('./im-ex');

if(operation == "sum"){
    console.log(sum(numbers))
}else if(operation == "avg") {
    console.log(avg(numbers))
} else {
    console.log('I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)')
}


