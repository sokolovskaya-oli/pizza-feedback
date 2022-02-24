import React from 'react'


const BtnDeleteAll = ({setClearApp, clearApp, loading, setLoading})=>{

    function clearApp(){
        localStorage.clear()
        setClearApp(true)    
        setLoading(!loading)  
    }

    return(
            <button className="btn_delete" onClick={clearApp}> Delete All</button>
    )
}
export default BtnDeleteAll
