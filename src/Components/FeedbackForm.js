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
        let clearedFedbacks = feedBackArr.filter(item => item.name != guestName)
        localStorage.setItem('feedbacks', JSON.stringify(clearedFedbacks))
        setFeedBackArr(JSON.parse(localStorage.getItem('feedbacks')))
        history.push('/')
    }

    return(
        <div>
                  
            <button onClick={()=>deleteFeedback()}>delete</button>
            <span>name</span>
            <p>{data.name}</p>
            <div className="products_product_stars">
                 <Rate  defaultValue={5} />
            </div>
            <span>phone</span>
            <p>{data.phone}</p>
            <span>comment</span>
            <p>{data.comment}</p>
        </div>
    )
}
export default FeedbackForm
