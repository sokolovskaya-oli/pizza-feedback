import React from 'react'
import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Context from './Context'
import { Rate } from 'antd';

const FeedbackForm = () =>{
    const {feedBackArr, setFeedBackArr} = useContext(Context)
    const location = useLocation()
    const guestName = location.state
    const history = useHistory()
    const data = feedBackArr.find(item => item.name === guestName)
   
    function deleteFeedback(){
        let clearedFedbacks = feedBackArr.filter(item => item.name !== guestName)
        localStorage.setItem('feedbacks', JSON.stringify(clearedFedbacks))
        setFeedBackArr(JSON.parse(localStorage.getItem('feedbacks')))
        history.push('/')
    }

    return(
        <div className='feedback_form__wrapper'>
            <button className='btn_feedback btn_delete' onClick={()=>deleteFeedback()}>delete</button>
            <div className="form__stars">
                 <Rate  defaultValue={5} />
            </div>
            <div className='feedback_form__capture'>
                <h3>Name:</h3>    
                <p>{data.name}</p>
                <h3>Phone:</h3>
                <p>{data.phone}</p>
                <h3>Comment:</h3>
                <p>{data.comment}</p>
            </div>
        </div>
    )
}
export default FeedbackForm
