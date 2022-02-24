import React, {useState, useContext } from "react";
import { useHistory , useLocation } from "react-router-dom";
import Context from './Context'
import { Rate } from 'antd';

function FormEmpty () {
    const history = useHistory()
    const location = useLocation()
    const value = location.state
    const guestName = value 
    const {feedBackArr, setFeedBackArr} = useContext(Context)
    const [form, setForm]=useState({name: guestName, phone:'', comment:''})
    const [phoneDirty, setPhoneDirty]=useState(false)
    const [commentDirty, setCommentDirty]=useState(false)
    const [phoneError, setPhoneError]=useState('Номер телефонна пуст')
    const [commentError, setCommentError]=useState('Напишите комментарий')
    const [formValid,setFormValid]=useState(false)
    
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [rate, setRate]=useState(3)
    
    const handleChange = rate => {
        setRate(rate);
      };

    const handlClickSave=()=>{
        feedBackArr.push(form)
        setFeedBackArr(feedBackArr) 
        localStorage.setItem('feedbacks', JSON.stringify(feedBackArr))
        history.push('/')
    }
    const handlClick=()=>{
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
       let phoneNo = /[\+]375\s[\( ]\d{2}[ \)]\s\d{3}[\- ]\d{2}[\- ]\d{2}/;
      
        if (phoneNo.test(e.target.value)) {
            setPhoneError('')
        } else {
            setPhoneError('Номер телефонна введен неверно')
        }
     }
     const commentHandler=(e)=>{
        setForm({ ...form, comment:e.target.value })
        if (e.target.value.length >2)  {
           setCommentError('')
       } else {
           setCommentError('Добавьте комментарий')
       }
    }

    return(
        <form onSubmit={(event)=>event.preventDefault()}>
            <h3> {value}</h3>
            <div className="form__stars">
                 <Rate tooltips={desc} defaultValue={3} onChange={(rate)=>handleChange(rate)} rate={rate} />
            </div>
            <div className="phone-field">
                <label className="phone-field__label" for="phone"> Phone:
                    {phoneDirty && phoneError && <div style={{color:'red'}}>{phoneError}</div>}
                    <input type="phone"
                            name="phone"
                            placeholder="Напр: +375 (29) 111-22-33"
                            value={form.phone}
                            onChange={e=>phoneHandler(e)}
                            onBlur={e=>blurHandler(e)}
                            className="phone-field__input"
                    />
                </label>
            </div>
            <div className="comment-field">
                <label className="comment-field__label" for="comment"> Comment:
                {commentDirty && commentError && <div style={{color:'red'}}>{commentError}</div>}
                    <input type="textarea"
                        name="comment"
                        value={form.comment} 
                        onChange={e=>commentHandler(e)}
                        onBlur={e=>blurHandler(e)} 
                        className="comment-field__input"
                    />
                </label>
            </div>
            {(form.phone.length > 8 && form.comment.length > 2) ?
              <button className='btn_form btn_delete' disabled={formValid} onClick={()=>handlClickSave()}>Save</button> :
               <button className='btn_form btn_delete' onClick={()=>handlClick()}>Cancel</button>
            }
        </form>
    )
}
export default FormEmpty