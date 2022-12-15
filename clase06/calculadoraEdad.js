const moment = require('moment');
const today = moment();
const myBirthday = moment('2002-09-22')
if (myBirthday.isValid()){
    const days = today.diff(myBirthday,'days');
    const year = days/365
    console.log(year);
}