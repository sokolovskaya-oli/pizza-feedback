import React from 'react'


const BtnDeleteAll = ({setClearApp, loading, setLoading})=>{

    const deleteAll=()=>{
        localStorage.clear()
        setClearApp(true)    
     }

    return(
            <button className="btn_delete" onClick={deleteAll}> Delete All</button>
    )
}
export default BtnDeleteAll
