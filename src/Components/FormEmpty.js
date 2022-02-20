import React, {useEffect, useState} from "react";
import { useHistory, useLocation } from "react-router-dom";

function FormEmpty () {
    const history = useHistory()
    const location = useLocation()
    const  value = location.state
    const authorName = value.name 
    console.log(value)
  
    

    const [form, setForm]=useState({phone:'', comment:''})
    const [feedback, setFeedback]=useState()

    const handlClick=()=>{
        setFeedback(form)
        localStorage.setItem('feedback', JSON.stringify(form))

    }
    return(
        <form>
            <p>Name</p>
            <h2> Mark </h2>
            <p>★★★★★</p>
            <label> Phone:
                <input type="phone"
                        value={form.phone}
                        onChange={e=>setForm({ ...form, phone:e.target.value })}
                 />
            </label>
            <label> Comment:
                <input type="textarea"
                      value={form.comment} 
                      onChange={e=>setForm({ ...form, comment:e.target.value })} 
                />
            </label>
            <button>Cancel</button>
            <button onClick={()=>handlClick()}>Save</button>
        </form>
    )
}
export default FormEmpty