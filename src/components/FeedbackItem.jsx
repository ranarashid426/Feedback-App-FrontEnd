import React from 'react'
import Card from '../shared/Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackItem({item}) {
  const {feedbackDelete,editFeedback} = useContext(FeedbackContext)

  
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>feedbackDelete(item.id)}>
          <FaTimes className='close' color='purple'/>
        </button>
        <button onClick={()=>editFeedback(item)} >
          <FaEdit className='edit' color='purple'/>
        </button>
        <div className="text-display">
            <p>{item.text}</p>    
        </div>
    </Card>
  )
}

export default FeedbackItem