import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:"This is feedback item 1",
            rating:7
        },
        {
            id:2,
            text:"This is feedback item 2",
            rating:9
        },
        {
            id:3,
            text:"This is feedback item 3",
            rating:10
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    })
// Delete Feedback
    const feedbackDelete = (id)=>{
   
       setFeedback(feedback.filter((item)=>{
        return item.id!==id
       }))
      }
    //   Add Feedback

      const feedbackAdd = (newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
      }

    //   Edit Feedback
    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    // Update Feedback
    const updateFeedback = (id,updItem)=>{
        setFeedback(feedback.map((item)=> item.id ===id ? {...item,...updItem}:item))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        feedbackDelete,
        feedbackAdd,
        editFeedback,
        updateFeedback,
        
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext