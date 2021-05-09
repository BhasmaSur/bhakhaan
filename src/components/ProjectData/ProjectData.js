import React,{useState,useEffect} from 'react'
import "./ProjectData.css";
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import InputField from "../InputField/InputField";
import WebsiteType from '../WebsiteType/WebsiteType';
import ApiType from '../ApiType/ApiType';
import BeforeAfterType from '../BeforeAfterType/BeforeAfterType';
import YogaType from '../YogaType/YogaType';
import OtherType from '../OtherType/OtherType';
import { useSelector,useDispatch } from "react-redux";
import { editProject } from "../../Redux";
import SelectField from "../SelectField/SelectField";


const PROJECT_LIST=[
    "Select type of project you want to demo",
    "WEBSITE",
    "API",
    "BEFORE AND AFTER",
    "YOGA",
    "OTHERS"
]


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


function ProjectData({currentPage}) {

    ///reduntant code
    function onWebsiteTypeEdited(subReturned){
        let changedType=currentPage.subProjects.map(sub=>{
            if(sub.subId === subReturned.subId){
                sub=subReturned
            }
            return sub
        })
        currentPage.subProjects=changedType;
        dispatch(editProject(currentPage))
    }
    function genrateFormHtml(type,sub){
        switch(type){
            case "1":
                return(
                    <WebsiteType obj={sub} onWebsiteTypeEdited={onWebsiteTypeEdited}/>
                )
          case "2":
              return(
                    <ApiType/>
              )
          case "3":
              return(
                  <BeforeAfterType/>
              )
          case "4":
              return(
                <YogaType/>
              )
          case "5":
              return(
                 <OtherType/>
              )
        }
      }


    const [showCheckBox,setCheckBox]=useState(true);
    const dispatch=useDispatch()
    const arrProjects = useSelector(state => state.data)
    const arrProject = arrProjects.filter(pro=> pro.projectId === currentPage.projectId)
     const onTitleChange=(value)=>{
        currentPage.projectTitle=value;
        dispatch(editProject(currentPage));
     }  

    const selectValueHandle=(val,obj)=>{
        let changedType=currentPage.subProjects.map(sub=>{
            if(sub.subId === obj.subId){
                sub.subType=val
            }
            return sub
        })
        currentPage.subProjects=changedType;
        dispatch(editProject(currentPage))
    }

    
    return (
        <div className="form-container">
            <div className="page-title">
                <InputField heading={"Page Title"} placeholder={"Enter Title"} width={350} fontSize={20} onValueChange={onTitleChange}/>
            </div>
            {arrProject[0].subProjects.map((sub)=>{
                return (
                <div className="form-details">
                    {showCheckBox && <Checkbox className="checkbox-style"/>}
                    <div className="generted-data">
                        <SelectField value={sub.subType} obj={sub} options={PROJECT_LIST} width={400} height={40} onValueSelected={selectValueHandle}/>
                        {genrateFormHtml(sub.subType,sub)}
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default ProjectData
