import React,{useState} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "./DropDownMM.css";
function DropDownMM({heading,values,valueToShow}) {

    const [boolExpandMore,setExapndContract]=useState(false);
    return (
        <div className="dropdown-box">
            <div className="dropdown-heading" onClick={()=>{setExapndContract(prevState=>!prevState)}}>
                {boolExpandMore ? <div className="dropdown-flex"><p className="dropdown-title">{heading}</p><div className="arrow-down"><ExpandMoreIcon/></div></div> : <div className="dropdown-flex"><p className="dropdown-title">{heading}</p><div className="arrow-left"><KeyboardArrowRightIcon/></div></div> }
            </div>
            <div className="box">
                {boolExpandMore && (values.map(pro=>{
                    return(
                        <div className="dropdown-list">
                            <p>{pro[valueToShow]}</p>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}

export default DropDownMM
