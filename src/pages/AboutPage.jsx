import React from 'react'
import Card from '../shared/Card'
import {Link} from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About Page</h1>
            <p>This is the Feedback application which can be used to give feedback related to product or service</p>
            <p>Version: 1.0.0</p>
        </div>
        <Link to="/">Go back to home page</Link>
 
    </Card>
  )
}

export default AboutPage