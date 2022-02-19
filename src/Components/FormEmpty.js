import React from "react";

const FormEmpty =()=>{

    return(
        <form>
            <p>Name</p>
            <h2> Mark </h2>
            <p>★★★★★</p>
            <label> Phone:
                <input type="phone"/>
            </label>
            <label> Comment:
                <input type="textarea"/>
            </label>
            <button>Cancel</button>
            <button>Save</button>
        </form>
    )
}
export default FormEmpty