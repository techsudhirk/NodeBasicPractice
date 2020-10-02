const EventEmitter = require('events');
// var log = function(message){
//     console.log(message);
//     emitter.emit('messageLogged', { id:1, url:'demoUrl'}) // signaling that an event is happened.
// }

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messageLogged', { id:1, url:'demoUrl'}) // signaling that an event is happened.
    } 
}
function a(){
    console.log('hellosk')
}
//module.exports = a;
//module.exports.log = log;
//Raise an event
module.exports = Logger; // exporting Logger
