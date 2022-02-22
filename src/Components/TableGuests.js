import React, {useState} from "react";
import Guest from "./Guest";

 function TableGuests (){
 
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
   
    return(
        <table className="table_wrapper">
       <tbody>
             <tr>
                <td>Guests</td>
            </tr>

            {Object.values(vegans).map((value, index)=>
                   <Guest 
                   key={index}
                   value={value.name}
                   style={{color:'green'}}
                   /> 
               )}
   

            {Object.values(guestGray).map((value, index)=>
                   <Guest 
                   key={index}
                   value={value.name}
                   style={{color:'gray'}}
                   />
              )}



            {rezult.map((value, index)=>
                 <Guest 
                 key={index}
                 value={value}
                 style={{color:'blue'}}
             />
            )}

             
            </tbody>
        </table>
    )

 }
 export default TableGuests