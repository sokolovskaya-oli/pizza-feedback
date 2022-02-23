import React from 'react'


const BtnDeleteAll = ({setClearApp, clearApp})=>{

    function clearApp(){
        localStorage.clear()
        setClearApp(true)      
    }

    return(
            <button onClick={clearApp}> Delete All</button>
    )
}
export default BtnDeleteAll
