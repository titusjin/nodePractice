/*
 Medinum:
 https://medium.com/@titusjin/just-saw-one-article-about-js-promise-async-await-the-example-for-promise-is-like-be37141269fb#.cj12rfhmd

 The hello world shold presents before promise-then execution.

 If adopt async/await, then statement would be erased.
 */

'use strict';

const await = require('asyncawait/await');
const async = require('asyncawait/async');

const posts = [
  { title: 'Post 1', content: 'fake content'},
  { title: 'Post 2', content: 'fake content'},
];
const getPosts = () => new Promise(
                            (resolve,reject) => {
                                if(posts){
                                    setTimeout(() => resolve(posts), 1000);
                                }
                                else{
                                    reject();
                                }
                            }
                      );

const printPosts1 = () => getPosts()
    .then(
      (posts) => {
        console.log(posts);
      },
      () => {
        console.log('ERROR cause NO POSTS DATA.');
      }
    )
    .catch(
      (err) => {
        console.error(err);
      }
    );

const printPosts2 = function(){
    getPosts()
      .then(
        (posts) => {
          console.log(posts);
        },
        () => {
          console.error('ERROR cause NO POSTS DATA.');
        }
      )
      .catch(
        (error) => {console.error(error)}
      );
}

var result;
const printPosts3 = async(
  function(){
    let posts = await(getPosts());
    console.log('ready to do assign..');
    result = posts;
  }
);


// Difference between  printPost1 and printPost2
// Just adopt ES6 arrow function or not
// printPosts1();
// printPosts2();
printPosts3();
console.log('hello world');
