const number = (busStops)=>{
//busStops => array
//[[getOnTheBus, getOffTheBus],[...]]
//return the number of people who are still on the bus after the last array (keep track of the people left on the bus after each busStop then add then up and return that)
//-----------------------one way to solve it--------------------------
// let peopleLeft=[];
// for (let i = 0; i < busStops.length; i++) {
//     peopleLeft.push(busStops[i][0]-busStops[i][1])   
// }
// console.log(peopleLeft.reduce((accumulator, currentValue)=>accumulator+currentValue));
//----------------------shoter way to solve it------------------------
let newPeople=busStops.map((element,index)=>busStops[index][0]-busStops[index][1]);

console.log(newPeople.reduce((accumulator, currentValue)=>accumulator+currentValue));


};
number([[10,0],[3,5],[5,8]]);
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
