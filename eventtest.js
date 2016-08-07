'use strict';

const EventEmitter = require('events');

var emitter = new EventEmitter();

emitter.on('click', function(){
    console.log(e);
    console.log('listener just be called');
});


emitter.emit('click');
