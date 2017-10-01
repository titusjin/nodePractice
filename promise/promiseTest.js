'use strict';

const Promise = require("bluebird");
const axios = require("axios");

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=PAPERCLIP1234";

let doTest = () => {
    return axios.get(`${ROOT_URL}/posts${API_KEY}`)
                .then( result => {
                    console.log('IN axios then ', result);
                    return result;
                })
                .catch( err => {
                    console.log('FAIL +++++++++');
                });
}
let doTest2 = () => {
    return axios.get(`${ROOT_URL}/p${API_KEY}`)
                .then( result => {
                    console.log('IN axios then ', result);
                    return result;
                })
                .catch( err => {
                    console.log('IN axios catch ', err);
                    return {name: 'AXIOS_FAIL', status: err.response.status};
                });
}


let doStart = () => {
    let promiseArray = [];
    for( let i = 0 ; i < 2 ; i++ ){
        console.log(i);
        if( i == 0 ){
            promiseArray.push( doTest2() );
        }else{
            promiseArray.push( doTest() );
        }
    }

    console.log('the promiseArray length is : ', promiseArray.length);

    Promise.all( promiseArray )
        .then( results => {
            console.log('the return start ********');

            for(let i = 0 , leng = results.length ; i < leng ; i++ ){
                if(results[i].status !== 200){
                    console.log(results[i]);
                }
            }
            console.log('the return end ********');
        }, reject => {
            console.log('THE reject start ---------');
            console.log('居然是這～', reject);

            console.log('THE reject end -----------');
        })
        .catch( err => {
            console.log(err);
        });
}

doStart();
