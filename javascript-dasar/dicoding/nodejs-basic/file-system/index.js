const fs = require('fs')

const notes = fs.readFileSync('notes.txt', 'utf-8');

console.log(notes);