const Promise = require('promise');

function job(){
    return new Promise( (resolve, reject) => {
        console.log('start');
        resolve('hello');
    });
}

function job2(){
    return new Promise( (resolve, reject) => {
        resolve('job2');
    });
}

function doanother(){
    return new Promise((resolve, reject) => {
        resolve(job2());
    })
        .then( res => {
            console.log('anoterh');
            return 'deepblu';
        })
        .then(res => {
            console.log('third');
        });
}

job()
    .then(res => {
        return Promise.resolve('world');
    })
    .then(res => {
        doanother();
        return Promise.resolve('titus');
    })
    .then(res => {
        console.log(res);
    });
