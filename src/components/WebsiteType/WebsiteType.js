import React,{useState,useEffect} from 'react'
import InputField from "../InputField/InputField";
import InputArea from '../InputArea/InputArea';
import "./WebsiteType.css";
function WebsiteType({obj,onWebsiteTypeEdited}) {

    const [boolWebsiteLoaded,setBoolWebsiteLoaded]=useState(false)
    const [subNewData,setSubNewData]=useState(obj.subData)
    function enterTitle(val){
        obj.subTitle=val
    }
    function enterDescription(val){
        setSubNewData({
            subDescription:val,
            subUrl:subNewData.subUrl,
            subCategories:subNewData.subCategories
        })
    }
    function enterUrl(val){
        setSubNewData({
            subDescription:subNewData.subDescription,
            subUrl:val,
            subCategories:subNewData.subCategories
        })
    }
    function enterCategories(val){
        setSubNewData({
            subDescription:subNewData.subDescription,
            subUrl:subNewData.subUrl,
            subCategories:val
        })
    }
    useEffect(() => {
        obj.subData=subNewData
        onWebsiteTypeEdited(obj)
    }, [subNewData])
    useEffect(() => {
        console.log("see if there is some problem")
    }, [subNewData.subUrl])
    return (
        <div className="website-box">
            <div className="not-browser">
                <div className="sub-data-web-title">
                    <InputField changedValue={obj.subTitle} heading={"Title"} placeholder={"title"} width={350} fontSize={20} onValueChanged={enterTitle}/>
                </div>
                <div className="sub-data-web-description">
                    <InputArea changedValue={obj.subData.subDescription} heading={"Description"} placeholder={"description"} fontSize={20} width={350} rows={4} onValueChanged={enterDescription}/>
                </div>
                <div className="sub-data-web-url">
                    <InputField changedValue={obj.subData.subUrl} heading={"URL"} placeholder={"url"} width={350} fontSize={20} onValueChanged={enterUrl}/>
                </div>
                <div className="sub-data-web-categories">
                    <InputField changedValue={obj.subData.subCategories} heading={"Categories"} placeholder={"categories"} width={350} fontSize={20} onValueChanged={enterCategories}/>
                </div>
            </div>
            <div className="browser">
                <div className="preview_wrap">
                    {/* <iframe className="frame_wrap" src="https://ensoautomationindia.com/"></iframe> */}
                    <iframe width="1024" height="768" allow="fullscreen" className="testing" src={obj.subData.subUrl}></iframe>
                </div>
            </div>
        
        </div> 
    )
}

export default WebsiteType
