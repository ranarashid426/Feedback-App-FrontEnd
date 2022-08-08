import React from 'react'
import {useState,useContext,useEffect} from "react"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackRating({select}) {
    const [selected, setselected] = useState(10)
    const {feedbackEdit} = useContext(FeedbackContext)

    const handleChange = (e)=>{
        select(+e.target.value)
        setselected(+e.target.value)

    }
    useEffect(()=>{
        setselected(feedbackEdit.item.rating)
    },[feedbackEdit])
  return (
    <ul className="rating">
        {Array.from({length:10},(_,i)=>(
            <li key={`rating-${i+1}`}>
                <input type="radio" name="rating" id={`num${i+1}`} value = {i + 1}
                onChange = {handleChange}
                checked = {selected === i+1}
                />
                <label htmlFor={`num${i+1}`}>{i+1}</label>

            </li>
        ))}
    </ul>
  )
}

export default FeedbackRating