console.log('starting app');

const fs=require('fs');
const notes=require('./notes.js');

const _=require('lodash');
const yargs=require('yargs');

const argv=yargs.argv;

console.log('process',process.argv)
console.log('yargs',yargs.argv)

var command = process.argv[2];
//hi
console.log(command);

if(command === 'add')
{
  notes.addnote(argv.title,argv.body);
  console.log('add');
}
else if (command === 'list') {
  console.log('list');
  notes.getAll();
}
else {
  console.log('nothing');
}
