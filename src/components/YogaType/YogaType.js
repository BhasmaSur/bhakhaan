import React from 'react'
import InputField from "../InputField/InputField";
import InputArea from '../InputArea/InputArea';
import "./YogaType.css";
function YogaType() {
    return (
        <div className="yoga-container">
            <div className="yoga-title">
                <InputField heading={"Title"} placeholder={"Title"} width={350} fontSize={20}/>
            </div>
            <div className="yoga-image">
            <img 
                    height="400"
                    src="images/pose1.jpeg"
                    alt="before image"
                /> 
            </div>
            <div className="yoga-caption">
                <InputField heading={"caption"} placeholder={"Caption"} width={350} fontSize={20}/>
            </div>
            <div className="yoga-description">
                <InputArea heading={"Description"} placeholder={"Description"} fontSize={20} width={920} rows={2}/>
            </div>
        </div> 
    )
}

export default YogaType
