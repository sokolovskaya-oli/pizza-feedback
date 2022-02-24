import React from "react";
import Guest from "./Guest";


 function TableGuests ({guests, vegans}){
   
     const guestGray = Object.values(guests).filter(value=>value.eatsPizza===false)
     const blueGuest= Object.values(guests).filter(value=>value.eatsPizza===true)
     let result = {};
     const func = (blueGuest, vegans) => {
        for (let prop in blueGuest) {
            if (!vegans.hasOwnProperty(prop)) result[prop] = blueGuest[prop];
        }
        return result;
    }

    func(blueGuest, vegans)
    let ffff=Object.values(result).map(item=> item.name)
  
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

            {Object.values(ffff).map((value, index)=>
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