'use strict';

const Promise = require("bluebird");
const axios = require("axios");

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=PAPERCLIP1234";

let call2 = () => {
    return new Promise( (resolve, reject) => {
        console.log('start call2 promise code');
        resolve( {name: 'WHAT_EXCEPTION'} );
    });
}

let call3 = () => {
    return axios.get(`${ROOT_URL}/posts${API_KEY}`)
                .then( result => {
                    console.log('IN axios then ', result);
                    return result;
                })
                .catch( err => {
                    console.log( err );
                    return {name: 'ACIOS_FAIL'}
                });
}

let call4 = () => {
    return new Promise( (resolve, reject) => {
        console.log('cal4 new promise');
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
                    .then( result => {
                        console.log('IN axios then ', 'result');
                        return 'result';
                    })
    })
}

let call1 = () => {
    console.log('start call1');

    return new Promise( (resolve, reject) => {
        call2()
            .then( res => {
                console.log('In call2 then section get : ', res);
                resolve( res );
            });
    });
}

let doStart = () =>{
    call4()
        .then( res => {
            console.log(' What is the res of the call4 then section : ', res);
            return res;
        })
        .then( res => {
            console.log(' call 3 second section as : ', res);
        })
        .catch( err => {
            console.log('Into catch section' , err);
        });
}

doStart();
