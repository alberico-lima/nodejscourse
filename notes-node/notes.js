console.log('Starting notes.js.');

const fs = require('fs');

var fetchNotes = () => {
    try {
        notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }
    catch (e){
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    try {
        notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }
    catch (e){

    }

    // var duplicateNotes = notes.filter(() => {
    //     return note.title === title;
    // })
    // alternatevely you can use error function like below, both forms are equivalent
    var duplicateNotes = notes.filter((note) =>  note.title === title )    
    
    if (duplicateNotes.length === 0 ) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();    
    // filter notes
    var newNotes = notes.filter((note) =>  note.title !== title ) 
    // save new notes array
    saveNotes(newNotes);
    return notes.length !== newNotes.length
}

module.exports = {
    addNote,
    removeNote
};