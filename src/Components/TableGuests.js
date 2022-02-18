import React from "react";
import { Link } from "react-router-dom"

 function TableGuests ({guests}){

    return(
        <table className="table_wrapper">
       <tbody>
            <tr>
                <td>Guests</td>
            </tr>

            {Object.values(guests).map((value,index)=>
               
            <tr key={index}> 
                <td><Link to="/{value.name}"  >{value.name}</Link></td>
            </tr>)
            }
           
            

           
            </tbody>
        </table>
    )

 }
 export default TableGuests