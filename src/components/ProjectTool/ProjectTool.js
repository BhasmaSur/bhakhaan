import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { useSelector,useDispatch } from "react-redux";
import { editProject } from "../../Redux";
import "./ProjectTool.css";

function ProjectTool({currentPage}) {

    const arrProjects = useSelector(state => state.data)
    const dispatch=useDispatch()
    function addNewSubProject(){
        arrProjects.map(pro=>{
            if(pro.projectId === currentPage.projectId){
                pro.subProjects.push(createEmptySub());
            }
            return pro;
        })
        dispatch(editProject(arrProjects));
    }
    function createEmptySub(){
        return {
            subId:currentPage.subProjects.length+1,
            subType:0,
            subTitle:"Enter The Title",
            subData:{}
        }
    }
    return (
    <div className="form-tool">
        <AddCircleIcon fontSize="large" className="tool" onClick={addNewSubProject}/>
        <EditRoundedIcon fontSize="large" className="tool"/>
        <DeleteRoundedIcon fontSize="large" className="tool-last"/>
    </div>
    )
}

export default ProjectTool
