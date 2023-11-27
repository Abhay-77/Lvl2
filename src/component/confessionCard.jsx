import React from 'react'
import './confessioncard.css'
const Confess = (Confession) => {
return (
    <article>
      <h3>{Confession.confess}</h3>
      <p>{Confession.date.toDate().toLocaleDateString()}</p>

    </article>
    
  )
}
export default Confess
