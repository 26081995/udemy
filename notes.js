
console.log('starting notes.js');

/*module.exports.age=25;
module.exports.addnote=()=>{
  console.log('add note');
  return('new note');
};*/

const fs=require('fs');

var fetchNotes =()=>{
  try {
    var notestring=fs.readFileSync('notes-data.json');
    return JSON.parse(notestring);
  } catch (e) {
    return [];
  }
};

var saveNotes =(notes)=>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};


var addnote=(title,body)=>{
//console.log('adding note :',title,body);

//var notes=[];
var notes=fetchNotes();
  var note={
      title,
      body
  };

/*try {
  var notestring=fs.readFileSync('notes-data.json');

  notes=JSON.parse(notestring);
} catch (e) {

}*/

var duplicatenote = notes.filter((note) => note.title===title);

if(duplicatenote.length===0)
{
  notes.push(note);

  saveNotes(notes);
  return note;
  //fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}


};

var getAll = () => {

  return fetchNotes();
  console.log('Getting all notes');
};

var read=(title)=>{
  var notes =fetchNotes();
  var filterednotes = notes.filter((note) => note.title === title);
  return filterednotes[0];


};

var remove=(title)=>{
//console.log('adding note :',title);

var notes =fetchNotes();
var filterednotes = notes.filter((note) => note.title !== title);
saveNotes(filterednotes);

return notes.length !== filterednotes.length;

};

var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};



module.exports={
  addnote,
  getAll,
  read,
  remove,
  logNote

};
