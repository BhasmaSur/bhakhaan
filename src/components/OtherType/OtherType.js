import React from 'react'
import InputField from "../InputField/InputField";
import InputArea from '../InputArea/InputArea';
import "./OtherType.css";
function OtherType() {
    return (
        <div className="other-container">
            <div className="other-title">
                <InputField heading={"Title"} placeholder={"Title"} width={350} fontSize={20}/>
            </div>
            <div className="other-image">
            <img 
                    height="400"
                    src="images/pose1.jpeg"
                    alt="before image"
                /> 
            </div>
            <div className="other-caption">
                <InputField heading={"Caption"} placeholder={"Caption"} width={350} fontSize={20}/>
            </div>
            <div className="other-description">
                <InputArea heading={"Description"} placeholder={"Description"} fontSize={20} width={920} rows={10}/>
            </div>
        </div> 
    )
}

export default OtherType
