import React,{useState} from 'react';
import "./InputField.css";

function InputField({heading,placeholder,width,fontSize,onValueChanged,changedValue}) {

    const inputStyle={
        width:width+"px",
        fontSize:fontSize+"px",
        fontFamily:"Arial, Helvetica, sans-serif",
        padding:"10px"
    }
    const onInputChange=val=>{
        setValue(val);
        onValueChanged(val);
    }
    const [value,setValue]=useState(changedValue);
    return (
        <div className="input-container">
            <p className="input-heading">{heading}</p>
            <input type="text" style={inputStyle} placeholder={placeholder} value={value} onChange={(event)=>onInputChange(event.target.value)}></input>
        </div>
    )
}

export default InputField
