//dates and times
const now = new Date();
console.log(now);
console.log(typedef now);
// year,months,day,time
console.log('getFullYear:',now.getFullYear());
console.log('getMonth',now.getMonth());
console.log('getDate',now.getDate());
console.log('getSeconds',now.getSeconds());

//timestamps
console.log('timestamp',now.getTime());
//data strings
console.log(now.toDataString());
console.log(now.toTimeString());
   

//Timestamp and comaprisions
const before = new Date();
const now = new Date();
//console.log(now.getTime());

const diff = now.getTime()-before.getTime();
console.log(diff);







