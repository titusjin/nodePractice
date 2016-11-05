'use strict';

var moduleDesign = require('./moduleDesign');

moduleDesign.sayhello().then(function(data){
    console.log(data);
    return moduleDesign.sendMessage('hello deepblu');
}).then(function(data){
    console.log(data);
});
