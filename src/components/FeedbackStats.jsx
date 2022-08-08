import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    

    const average = feedback.reduce((acc,curr)=>{
        return acc+curr.rating /feedback.length
    },0)
    
    

    
  return (
    <div className="feedback-stats">
        <h4 className="reviews">Reviews: {feedback.length}</h4>
        <h4 className="rating">Average: {average.toFixed(1)}</h4>
    </div>
  )
}

export default FeedbackStats