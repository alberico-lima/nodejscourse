console.log("Starting app.");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2]
console.log(`Command: ${command}`);
console.log(`Process: ${process.argv}`);
console.log('Yargs: ', argv);
console.log(argv.title,' ',argv.body);

if (command === 'add') {
    console.log('Adding new note');
    var note = notes.addNote (argv.title,argv.body);
    if (note) {
      console.log('Note added: Title is '+note.title+ ' ; Body is '+note.body);
    } else {
      console.log('Note already exists');
    }
} else if (command === 'list'){
    console.log('Listing all notes');
  }
  else if (command === 'read'){
    console.log('Fetching note');
  }
  else if (command === 'remove'){
    console.log('Removing note');
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(noteRemoved, message);
  } 
  else {
    console.log('Command not recognized')
  }

