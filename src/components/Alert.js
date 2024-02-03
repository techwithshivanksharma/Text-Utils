import React from 'react'

function Alert(props) {

    const captalize =(word) =>{
        let lowerwrd = word.toLowerCase();
        return lowerwrd.charAt(0).toUpperCase()+ lowerwrd.slice(1);
    } 
    return (
        <div style={{height:'15px'}}>
        {props.alert && <>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{captalize(props.alert.type)}: </strong> {props.alert.msg}
            </div>
        </>}
        </div> 
    )
}

export default Alert
