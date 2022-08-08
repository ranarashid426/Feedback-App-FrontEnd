import React from 'react'
import { Link } from "react-router-dom"


function Header({text,bgColor,textColor}) {
  return (
    <header style={{backgroundColor:bgColor,color:textColor}}>
        <div className="container">
            <Link to={'/'} style = {{textDecoration:'none'}}><h2 >{text}</h2></Link>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text:"Feedback UI"
}


export default Header