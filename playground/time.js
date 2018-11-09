var moment = require('moment');
// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// var date = new moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
//padded - minutes, unpadded - hourse - 6:01 am

new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
date = new moment(createdAt);
console.log(date.format('h:mm a'));
