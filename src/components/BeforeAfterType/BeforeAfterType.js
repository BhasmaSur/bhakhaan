import React,{useState,useEffect} from 'react'
import InputArea from '../InputArea/InputArea';
import InputField from "../InputField/InputField";
import "./BeforeAfterType.css";
function BeforeAfterType() {
    const [imageStyleBefore,setImageStyleBefore]=useState({
        transform:`scale(1,1)`
    })
    const [imageStyleAfter,setImageStyleAfter]=useState({
        transform:`scale(1,1)`
    })
    const [beforeDimension,setBeforeDimension]=useState({
        width:0,
        height:0
    })
    const [afterDimension,setAfterDimension]=useState({
        width:0,
        height:0
    })
    const getDimensionAndStoreBefore=(iObj)=>{
        const dim ={
            width:iObj.target.offsetWidth,
            height:iObj.target.offsetHeight
        }
        console.log(dim)
        setBeforeDimension(dim);
    }
    const getDimensionAndStoreAfter=(iObj)=>{
        const dim ={
            width:iObj.target.offsetWidth,
            height:iObj.target.offsetHeight
        }
        console.log(dim)
        setAfterDimension(dim);
    }
    function editImageToFix(){
        let changedWidth=(beforeDimension.width > afterDimension.width ? (afterDimension.width/beforeDimension.width) : (beforeDimension.width/afterDimension.width));
        console.log("scale width to this width :",changedWidth);
        if(beforeDimension.width > afterDimension.width){
            let changedWidth = afterDimension.width/beforeDimension.width
            setImageStyleBefore({
                transform:`scale(${changedWidth},1)`
            })
        }
        else{
            setImageStyleAfter({
                transform:`scale(${changedWidth},1)`
            })
        }
    }
    useEffect(() => {
        console.log(beforeDimension,afterDimension)
        editImageToFix();
    },[afterDimension])
    return (
        <div className="before-after-container">
            <div className="before-after-title">
                <InputField heading={"Title"} placeholder={"Title"} width={350} fontSize={20}/>
            </div>
            <div className="before-after-pic-box">
                <div className="before-box">
                    <div className="before-after-before-pic">
                        <img 
                            style={imageStyleBefore}
                            onLoad={getDimensionAndStoreBefore}
                            height="400"
                            src="images/before.jpeg"
                            alt="before image"
                        />
                        </div>
                        <div className="before-after-before-caption">
                        caption
                    </div>
                </div>
                <div className="after-box">
                    <div className="before-after-after-pic">
                        <img 
                                style={imageStyleAfter}
                                onLoad={getDimensionAndStoreAfter}
                                height="400"
                                src="images/after.jpeg"
                                alt="before image"
                            />                                 
                        </div>
                    <div className="before-after-after-caption">
                        after caption
                    </div>
                </div>
            </div>
            <div className="before-after-description">
                <InputArea heading={"Description"} placeholder={"Description"} fontSize={20} width={920} rows={2}/>
            </div>
        </div> 
    )
}

export default BeforeAfterType
