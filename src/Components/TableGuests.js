import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom'

 function TableGuests (){
    const history = useHistory()
    
    function formView(){
        history.push(`guest/${value.name}`, value)
    };


     const [guests, setGuests]=useState(JSON.parse(localStorage.getItem("guests") || "[]"));
     const guestGray = Object.values(guests).filter(value=>value.eatsPizza===false)
     
     const [vegans, setVegans]=useState(JSON.parse(localStorage.getItem("vegans") || "[]"));
     const blueGuest= Object.values(guests).filter(value=>value.eatsPizza===true)
     const rezult = []
     blueGuest.forEach(function(guest){
         if(vegans.name != guest.name){
             rezult.push(guest.name)
         }
     });
    //  <NavLink to={`${value.name}`}
    return(
        <table className="table_wrapper">
       <tbody>
             <tr>
                <td>Guests</td>
            </tr>

            {Object.values(vegans).map((value, index)=>
               <tr key={index}  > 
               <td style={{color:"green"}} 
                onClick={()=>formView()}>{value.name}</td>
           </tr> )}

            {Object.values(guestGray).map((value, index)=>
               <tr key={index}  > 
               <td style={{color:"gray"}} 
                onClick={()=>formView()}>{value.name}</td>
               </tr>)}

            {rezult.map((value, index)=>
               <tr key={index}  > 
               <td style={{color:"blue"}} 
                onClick={()=>formView()}>{value}</td>
               </tr>)}
             
            </tbody>
        </table>
    )

 }
 export default TableGuests