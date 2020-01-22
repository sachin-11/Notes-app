const validator = require('validator')
const notes = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
 

yargs.version('1.1.0')
//add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       },
       body: {
           describe: 'Notes body',
           demandOption: true,
           type: 'string'
       }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//remove command

yargs.command({
    command: 'remove',
    describe: 'remove a notes',
    builder: {
         title: {
             describe: 'Note title',
             demandOption: true,
             type: String
         }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

//read command 

yargs.command({
    command: 'read',
    describe: 'Read a notes',
    builder: {
        title: {
            describe: 'notes title',
            demandOption: true,
            type: String
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'List of your note',
    handler: function(){
      notes.listNotes() 
    }
})

yargs.parse()
//console.log(yargs.argv)