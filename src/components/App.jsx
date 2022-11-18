import React from 'react';
import Footing from './Footer';
import Heading from './Header'
import Note from './Note'
import notes from '../notes.js'


function App () {
  return <div>
  <Heading />
  <div>
  {notes.map(note => (
    <Note 
      key={note.key}
      title={note.title}
      content={note.content}
    />
  ))}
  </div>
  <Footing />
  </div>
}

export default App;