import React from 'react'
import { useState,useContext,useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Button from '../shared/Button'
import Card from '../shared/Card'
import FeedbackRating from './FeedbackRating'



function FeedbackForm() {


    const [text, setText] = useState("")
    const [rating, setrating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const {feedbackAdd,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if (feedbackEdit.edit===true) {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setrating(feedbackEdit.item.rating)
            
        }
    },[feedbackEdit])
    const handleTextChange = (e)=>{
        if (text.value===0  ) {
            setbtnDisabled(true)
            setMessage("")           
        }else if(text.value!==0 && text.trim().length<=10) {
            setbtnDisabled(true)
            setMessage("Feedback must be at least 10 Characters long")
        }else{
            setbtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const newFeedback = {
            rating,
            text
        }
        if (feedbackEdit.edit ===true) {
            updateFeedback(feedbackEdit.item.id,newFeedback)
        }else{
            feedbackAdd(newFeedback)
        }
        setText("")
        
        
    }
  return (
    <Card>
        <h2>How would you rate our services?</h2>
    <form onSubmit={handleSubmit}>
        <FeedbackRating select={(rating)=>setrating(rating)} />
        <div className="input-group">
            <input type="text" onChange={handleTextChange} placeholder='Enter Your Feedback' value={text}  />
           <Button type='submit' version={'primary'} btnDisbaled={btnDisabled} >Send</Button>
        </div>
    </form>
    {message && <div className='message'>{message}</div>}

    </Card>
  )
}

export default FeedbackForm