/**
 *      This is one es6 syntax suger:
 *
 *
 */

'use strict';

const props = {videos : [{title: 'Lion', length: '1.5 **'},{title: 'Before flood', length: '1 *'}, {title: 'ToyStory2', length: '2 **'}]};

let testF = ({videos})=> {
    console.log(videos);
}


// IN node 5.6 not support this syntax suger.
// But support v7.0.0
testF(props);
