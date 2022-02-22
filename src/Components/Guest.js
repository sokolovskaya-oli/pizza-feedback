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
            history.push(`form/${value}`, value)
        }
    }
    function checkFeedBack(){
        if(feedBackArr.find(({name})=>name == value)){
            setLable(!lable)
        }return
    }

    useEffect(()=>{
        checkFeedBack()
    },[])

    
    return(
        
        <tr key={index}> 
        
            <td style={style} onClick={()=>formView()}>
             <span style={{color: 'red', fontWeight: 'bold'}}>{lable ? '✅ ' : ''}</span>
                {value}
                </td>
        </tr>

    )
}
export default Guest
