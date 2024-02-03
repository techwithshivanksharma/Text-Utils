import React from 'react'
import {useState} from 'react'

function About(props) {
   
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#6a5f5f':'white'
    }

    return (
        <div>
            <div className='container my-5' style={{color:props.mode === 'light'?'black':'white'}}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?'#6a5f5f':'white',color:props.mode==='dark'?'white':'black'}}>
                                <b>Ananyze Your Text</b>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               This is a TextUtils App which is based on manipulation of text as per user requirements.In this app a user can convert his/her text in 
                               lowercase oe uppercase ,able to remove extra spaces, able to reverse the text.As well as user can find the expected reading time of text 
                               and number or words and caharacters.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==='dark'?'#6a5f5f':'white',color:props.mode==='dark'?'white':'black'}}>
                               <b>Free to use</b>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                It is completely free to use there is no any subscription or any hidden charges.Also it is easy to use with well structured interface.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.mode==='dark'?'#6a5f5f':'white',color:props.mode==='dark'?'white':'black'}}>
                                <b>Browser Compatible</b>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This app is Browser compatible.Browser compatibility, often known as cross-browser compatibility, refers to whether or not a website or web application functions as intended in any particular browser version on different devices.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
