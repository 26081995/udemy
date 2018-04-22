
console.log('starting notes.js');

/*module.exports.age=25;
module.exports.addnote=()=>{
  console.log('add note');
  return('new note');
};*/

const fs=require('fs');

var addnote=(title,body)=>{
//console.log('adding note :',title,body);

var notes=[];
  var note={
      title,
      body
  };
  notes.push(note);

  fs.writeFileSync('notes-data.json',JSON.stringify(notes)); 
};

var getAll = () => {
  console.log('Getting all notes');
};

var read=(title)=>{
console.log('adding note :',title);
};

var remove=(title)=>{
console.log('adding note :',title);
};

module.exports={
  addnote,
  getAll,
  read,
  remove

};
