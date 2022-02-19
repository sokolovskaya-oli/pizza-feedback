import React, {useState} from "react";


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
     console.log(rezult)


    //  Object.values(vegans).every(item=> console.log(guest[item]) ))
    
    //  cars.forEach(function(item) {
    //     if (findObj.brand === item.brand ){
    //         console.log(item.model);
    //     }
    //     });

    //  guest[item] !=vegans[item]
    return(
        <table className="table_wrapper">
       <tbody>
            <tr>
                <td>Guests</td>
            </tr>

            {Object.values(vegans).map((value, index)=>
               <tr key={index}  > 
               <td style={{color:"green"}}>{value.name}</td>
           </tr> )}
            {Object.values(guestGray).map((value, index)=>
               <tr key={index}  > 
               <td style={{color:"gray"}}>{value.name}</td>
               </tr>)}
            {rezult.map((value, index)=>
               <tr key={index}  > 
               <td style={{color:"blue"}}>{value}</td>
               </tr>)}
           

            

           
            </tbody>
        </table>
    )

 }
 export default TableGuests