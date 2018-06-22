console.log('starting app');

const fs=require('fs');
const notes=require('./notes.js');

const _=require('lodash');
const yargs=require('yargs');

const argv=yargs.argv;

console.log('process',process.argv);
console.log('yargs',yargs.argv);

var command = process.argv[2];
//hi
console.log(command);

if(command === 'add')
{
  var note=notes.addnote(argv.title,argv.body);
  if (note) {
    console.log('note crreated');
    console.log(`title ${note.title}`)
  }
  else
  {
    console.log('note taken');
  }
  //console.log('add');
}
else if (command === 'list') {
  console.log('list');
  notes.getAll();
}
else if (command === 'read') {
  console.log('read');
  notes.read(argv.title);
}
else if (command === 'remove') {
  console.log('remove');
  notes.remove(argv.title);
}
else {
  console.log('nothing');
}
