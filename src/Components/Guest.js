import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Context from './Context'

const Guest = ({value, index, style}) =>{

    const {feedBackArr} = useContext(Context)  
    const history = useHistory()
    const [lable, setLable] = useState(false)
    
    function formView(){
        if(feedBackArr.find(({name})=>name == value)){
            history.push(`feedback/${value}`, value)
        }else{
            history.push(`/${value}`, value)
        }
    }
    function checkFeedBack(){
        if(feedBackArr.find(({name})=>name == value)){
            setLable(!lable)
        }
    }

    useEffect(()=>{
        checkFeedBack()
    },[])

    
    return(
        
        <tr key={index}> 
             <td style={style} onClick={()=>formView()}>
             <span style={{color: 'green', fontWeight: '700'}}>{lable ? String.fromCharCode(10004) : ''}</span>
                {value}
                </td>
        </tr>

    )
}
export default Guest
