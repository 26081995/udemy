console.log('starting app1');

const fs=require('fs');
const notes=require('./notes.js');

const _=require('lodash');
const yargs=require('yargs');

const argv=yargs
.command('add','add anew note',{
  title:{
    describe:'Title of note',
    demand:true,
    alias:'t'
  },
  body:{
    describe:'body of note',
    demand:true,
    alias:'b'
  }

})
.command('list','list note')
.command('read','read a note',{
  title:{
    describe:'Title of note',
    demand:true,
    alias:'t'
  }

})
.command('remove','remove a note',{
  title:{
    describe:'Title of note',
    demand:true,
    alias:'t'
  }

})
.help()
.argv;

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
 var allnotes= notes.getAll();
 //console.log(`printing ${allnotes.length} notes`);
 console.log(`Printing ${allnotes.length} note(s).`);

 allnotes.forEach((note) => notes.logNote(note));


}
else if (command === 'read') {
  console.log('read');
  var note=notes.read(argv.title);
  if (note) {
    console.log('note FOUNDd');
    console.log(`title ${note.body}`)
  }
  else
  {
    console.log('note not found');
  }
}
else if (command === 'remove') {
  console.log('remove');
  var noteremoved = notes.remove(argv.title);
var msg =noteremoved ? 'Note Removed' : 'note not found';
console.log(msg);

}
else {
  console.log('nothing');
}
