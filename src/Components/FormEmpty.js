import React, {useState, useContext, useEffect } from "react";
import { useHistory , useLocation } from "react-router-dom";
import Context from './Context'

function FormEmpty () {
    const history = useHistory()
    const location = useLocation()
    const  value = location.state
    const guestName = value.name 
    const {feedBackArr, setFeedBackArr} = useContext(Context)
    const [form, setForm]=useState({name: guestName, phone:'', comment:''})
    const [phoneDirty, setPhoneDirty]=useState(false)
    const [commentDirty, setCommentDirty]=useState(false)
    const [phoneError, setPhoneError]=useState('Номер телефонна пуст')
    const [commentError, setCommentError]=useState('Напишите комментарий')
    const [formValid,setFormValid]=useState(false)

    const handlClickSave=()=>{
        feedBackArr.push(form)
        setFeedBackArr(feedBackArr) 
        localStorage.setItem('feedbacks', JSON.stringify(feedBackArr))
        history.push('/')
    }
    function handlClick(){
        history.push('/')
    }
   
    const blurHandler=((e)=>{
        switch(e.target.name){
            case 'phone':
                setPhoneDirty(true)
              
                break
            case 'comment':
                setCommentDirty(true)
                break
    }
    })

     const phoneHandler=(e)=>{
         console.log(e.target.value)
         setForm({ ...form, phone:e.target.value })
       let phoneNo = /[\+]375\s[\(]\d{2}[\)]\s\d{3}[\- ]\d{2}[\- ]\d{2}/;
      
        if (phoneNo.test(e.target.value)) {
            setPhoneError('')
        } else {
            setPhoneError('Номер телефонна введен неверно')
        }
     }
     const commentHandler=(e)=>{
        console.log(e.target.value)
        setForm({ ...form, comment:e.target.value })
    
     
       if (e.target.value.length >2)  {
           setCommentError('')
       } else {
           setCommentError('Добавьте комментарий')
       }
    }

    return(
        <form>
            <p>Name</p>
            <h2>{value} </h2>
            <p>★★★★★</p>
            <label> Phone:
                {phoneDirty && phoneError && <div style={{color:'red'}}>{phoneError}</div>}
                <input type="phone"
                        name="phone"
                        placeholder="Используйте формат: +375 (33) 333-33-33"
                        value={form.phone}
                        onChange={e=>phoneHandler(e)}
                        onBlur={e=>blurHandler(e)}
                        
                 />
            </label>
            <label> Comment:
            {commentDirty && commentError && <div style={{color:'red'}}>{commentError}</div>}
                <input type="textarea"
                      name="comment"
                      value={form.comment} 
                      onChange={e=>commentHandler(e)}
                      onBlur={e=>blurHandler(e)} 
                />
            </label>
            
            {(form.phone.length > 8 && form.comment.length > 2) ?
              <button disabled={formValid} onClick={()=>handlClickSave()}>Save</button> :
               <button onClick={()=>handlClick()}>Cancel</button>
            }
        </form>
    )
}
export default FormEmpty