
console.log('starting notes.js');

/*module.exports.age=25;
module.exports.addnote=()=>{
  console.log('add note');
  return('new note');
};*/

var addnote=(title,body)=>{
console.log('adding note :',title,body);
};

var getAll= () => {
console.log('getting all  notes');
};

module.exports={
  addnote
  getAll

};
