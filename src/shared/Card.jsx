import React from 'react'

function Card({children}) {
  return (
    <div className="container">
        <div className="card">
            {children}
        </div>
    </div>
  )
}

export default Card