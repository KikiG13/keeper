import React from 'react';

const getDate = new Date()

const year = getDate.getFullYear()


function Footing () {
  return (
    <footer>
      <p>Copyright © {year} </p>
    </footer>
  )
}

export default Footing;