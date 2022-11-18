import React from 'react';
import Footing from './Footer';
import Heading from './Header'
import Note from './Note'
import notes from '../notes.js'


function App () {
  return <div>
  <Heading />
  {notes.map(noteItem => (
    <Note 
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
    />
  ))}
  <Footing />
  </div>
}

export default App;