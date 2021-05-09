import React,{useState} from 'react'

function SelectField({value,options,width,height,onValueSelected,obj}) {

    const selectStyle={
        fontSize: "20px",
        width:width+"px",
        height:height+"px",
        paddingLeft: "10px",
        paddingRight: "10px"
    }
    function handleChange(event){
        onValueSelected(event.target.value,obj)
    }
    return (
        <div>
             <select style={selectStyle} value={value} onChange={handleChange}> 
                {options.map((opt,index)=>(
                    <option key={index} value={index}>{opt}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectField
