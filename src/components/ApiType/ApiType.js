import React from 'react'
import "./ApiType.css";
import InputField from "../InputField/InputField";
import InputArea from '../InputArea/InputArea';
import SelectField from '../SelectField/SelectField';

const METHOD_LIST=[
    "SELECT METHOD",
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "OPTION"
]
function ApiType() {
    const selectMethodHandle=(val)=>{
        console.log(val)
    }
    return (
        <div className="api-url-container">
            <div className="api-title">
                <InputField heading={"Title"} placeholder={"Title"} width={350} fontSize={20}/>
            </div>
            <div className="api-url-box">
                <div className="api--method">
                    <SelectField options={METHOD_LIST} width={200} height={47} onValueSelected={selectMethodHandle}/>
                </div>
                <div className="api-url">
                    <InputField heading={"API Url"} placeholder={"Url"} width={700} fontSize={20}/>
                </div>
            </div>
            <div className="api-headers">
                <InputArea heading={"Headers"} placeholder={"Headers"} fontSize={20} width={920} rows={2}/>
            </div>
            <div className="api-description">
                <InputArea heading={"Description"} placeholder={"Description"} fontSize={20} width={920} rows={2}/>
            </div>
            <div className="api-payload-box">
                    <div className="api-request-body">
                            <InputArea heading={"Request Payload"} placeholder={"Request payload"} fontSize={20} width={450} rows={10}/>
                    </div>
                    <div className="api-data-result">
                            <InputArea heading={"Result"} placeholder={"Result Returned"} fontSize={20} width={450} rows={10}/>
                    </div>
            </div>
        </div> 
    )
}

export default ApiType
