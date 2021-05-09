import React,{useState} from 'react'
import "./InputArea.css";
function InputArea({heading,placeholder,fontSize,width,rows,onValueChanged,changedValue}) {

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
        <div className="input-area-container">
            <p className="input-area-heading">{heading}</p>
            <textarea type="text" rows={rows} style={inputStyle} placeholder={placeholder} value={value} onChange={(event)=>onInputChange(event.target.value)}></textarea>
        </div>
    )
}

export default InputArea
