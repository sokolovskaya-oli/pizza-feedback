import React from 'react'
import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Context from './Context'


const FeedbackForm = () =>{
    const {feedBackArr, setFeedBackArr} = useContext(Context)
    const location = useLocation()
    const guestName = location.state
    const history = useHistory()
    const data = feedBackArr.find(item => item.name === guestName)
   
    function deleteFeedback(){
        let clearedFedbacks = feedBackArr.filter(item => item.name != guestName)
        console.log(clearedFedbacks)
        localStorage.setItem('feedbacks', JSON.stringify(clearedFedbacks))
        setFeedBackArr(JSON.parse(localStorage.getItem('feedbacks')))
        history.push('/')
    }

    return(
        <div>
            <h1>FEEDBACK</h1>
            <span>name</span>
            <button onClick={()=>deleteFeedback()}>delete</button>
            <p>{data.name}</p>
            <span>phone</span>
            <p>{data.phone}</p>
            <span>comment</span>
            <p>{data.text}</p>
        </div>
    )
}
export default FeedbackForm
