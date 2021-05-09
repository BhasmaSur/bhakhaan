import React,{useState} from 'react'

function Test() {

    const [valueTesting,handleValue]=useState("nothing");
    const changeLabelValue=()=>{
        handleValue("somthing");
        console.log(valueTesting);
    }
    const checkValueAgain=()=>{
        console.log(valueTesting);
    }
    return (
        <div>
            <label>{valueTesting}</label>
            <button onClick={changeLabelValue}>Click to change</button>
            <button onClick={checkValueAgain}>{valueTesting}</button>
        </div>
    )
}

export default Test
