import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
  if(!feedback || feedback.length ===0){
    return <h2>No Feedback Available Yet</h2>
  }
   
  return (
    
   <div className="feedback-list">
       {feedback.map((item)=>{
       return <FeedbackItem key= {item.id} item={item} />
       
        })}
      
   </div>
   
  )
}

export default FeedbackList