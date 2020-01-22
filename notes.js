const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return 'Your notes'
}

const addNote = function(title, body){
    const notes = loadNotes()

//    // const duplicateNotes = notes.filter(function(note){
//          return note.title === title
//     })
    const duplicateNote = notes.find((note) =>{
        note.title = title
    })

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new Notes added'))
    } else {
        console.log(chalk.red.inverse('Notes title is taken'))
    }
   
}

const removeNotes = function(title){
  const notes = loadNotes()
  const notestoKeep = notes.filter(function(note){
      return note.title !== title
  })
   
  if(notes.length>notestoKeep.length){
      console.log(chalk.green.inverse('note remove'))
      saveNotes(notestoKeep)
  } else {
      console.log(chalk.red.inverse('No notes found'))
  }

  
}

const listNotes = () =>{
    const notes = loadNotes()
   console.log(chalk.inverse('your notes'))

   notes.forEach((note) =>{
       console.log(note.title)
   })
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) 
    
    if(note){
       console.log(chalk.inverse(note.title))
       console.log(note.body)
    } else {
         console.log(chalk.red.inverse('note not found'))
    }
}

const saveNotes = function(notes){
   const dataJson = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJson)
}


const loadNotes = function(){
   
    try {
    
    const dataBuffer = fs.readFileSync('notes.json')
   const dataJson = dataBuffer.toString()
   return JSON.parse(dataJson)
     
    } catch(e){

      return []
    }

   
}




module.exports = {
    getNotes,
    addNote,
    removeNotes,
    listNotes,
    readNotes
}


