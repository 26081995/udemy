console.log('starting app');

const fs=require('fs');
const notes=require('./notes.js');

const _=require('lodash');

var command = process.argv[2];
console.log(command);

if(command === 'add')
{
  console.log('add');
}
else if (command === 'list') {
  console.log('list');
}
else {
  console.log('nothing');
}
