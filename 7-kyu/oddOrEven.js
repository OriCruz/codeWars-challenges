const oddOrEven = (array)=>
array.reduce((accumulator,currentValue)=>accumulator+currentValue,0)%2===0?'even':'odd'; 
 

console.log(oddOrEven([]));