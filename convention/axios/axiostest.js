'use strict';

const axios = require('axios');

axios.get('http://udn.com')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });
