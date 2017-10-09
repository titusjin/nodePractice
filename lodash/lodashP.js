'use strict';
const _ = require('lodash');


console.log('-- start omit method of lodash -- ');
const c = {
    "name": "titus",
    "title": "RD",
    "company": "deepblu"
}
console.log('before omit c is: ');
console.log(c);

const d =  _.omit(c, "name");
console.log('after omit c is : ');
console.log(c);
console.log('after omit create one new object assigned to d as : ');
console.log(d);
console.log(' ++++++++++++++++++++++++++ \n\n');

console.log('-- Start mapKeys method of lodash --');
const arr = [
    {"id": 1, "name": "titus" , "title": "Team leader", "company": "deepblu"},
    {"id": 2, "name": "titus" , "title": "Tech Yahoo", "company": "Yahoo"},
    {"id": 3, "name": "titus" , "title": "Senior Engineer", "company": "104Tech"}
]

const o1 = _.mapKeys(arr, "id");
console.log('o1 after mapKeys is : ');
console.log(o1);
console.log(' ++++++++++++++++++++++++++ \n\n');


console.log('-- Start takeWhile method of lodash --');
const arr1 = [
    {
   id: '712cdf10021e11e7b7a569b9a3a645f1',
   ownerId: '574e7e833cad852219c337a9',
   'certificationMetaId': 'NAUI700',
   issueUrl: 'https://s3-ap-northeast-1.amazonaws.com/deepbluprofilecert/574e7e833cad852219c337a9/20160702174336798.jpg',
   issueNo: '51866',
   issueStatus: 'active',
   issueDate: '2017-03-16T11:44:27.000Z',
   diveCenterId: '',
   diveCoachId: '',
   createTime: '2017-03-06T03:39:03.000Z',
   updateTime: '2017-03-16T11:44:26.000Z',
   rejectReason: '' },
 {
   id: '9bfec9180af911e793ae92361f002671',
   ownerId: '574e7e833cad852219c337a9',
   'certificationMetaId': 'IDA200',
   issueUrl: 'https://s3-ap-northeast-1.amazonaws.com/deepbluprofilecert/574e7e833cad852219c337a9/20160702174336798.jpg',
   issueNo: '1212',
   issueStatus: 'active',
   issueDate: '2017-03-17T10:27:10.000Z',
   diveCenterId: '',
   diveCoachId: '',
   createTime: '2017-03-06T03:39:03.000Z',
   updateTime: '2017-03-17T10:27:10.000Z',
   rejectReason: '' }
];

let r = _.takeWhile(arr1, ['certificationMetaId', 'NAUI700']);

console.log(r);
