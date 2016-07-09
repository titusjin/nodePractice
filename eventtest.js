'use strict';

const EventEmitter = require('events');
var emitter = new EventEmitter();


emitter.on('event',function(){
    console.log('listener just be called');
});


emitter.emit('event');
