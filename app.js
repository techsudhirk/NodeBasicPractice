const path = require('path');
const os = require('os');
const fs = require('fs');
var filesArr = fs.readdirSync('./'); // synchronous method
console.log("all files (synchronous):",filesArr);
fs.readdir('./', (err, files) => { // asynchronous method
    if(err){
        console.log("error occured:",err)
    }
    else{
        console.log("all files (asynchronous):",files)
    }
})

console.log("files array:",filesArr)
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`total memory is ${totalMemory} and free memory is ${freeMemory}`)
var pathObj = path.parse(__filename);
console.log('path::',path.parse(__filename))
const logger = require('./logger.js')
new logger();
logger.log('abcd');
