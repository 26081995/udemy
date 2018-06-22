/*var obj={
  name:'milan'
};

var string=JSON.stringify(obj);
console.log(typeof string);
console.log(string);
*/

/*var person='{"name":"milan","age":20}';
var str=JSON.parse(person);
console.log(typeof str);
console.log(str);
*/


const fs=require('fs');

var originalNote={
  title,
  body
};

var originalNoteString=JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var notestring=fs.readFileSync('notes.json');

var note  = JSON.parse(notestring);

console.log(typeof note);
console.log(note.title);
