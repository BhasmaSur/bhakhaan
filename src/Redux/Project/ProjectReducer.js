import { ADD_PROJECT,EDIT_PROJECT,FETCH_PROJECT,REMOVE_PROJECT } from "./ProjectTypes";

const initialState={
    data:[]
}

const projectReducer =(state=initialState,action)=>{
    
    const tempProject=  {
        projectId:getNewProjectId(state.data),
        projectTitle:"Enter title",
        subProjects:[]
    }

    switch(action.type){
        case ADD_PROJECT:
            return {data:[...state.data,tempProject]}
        case EDIT_PROJECT:
            return (editTheProject(action.payload,state.data))
        case REMOVE_PROJECT:
            return (removeProjectSpecified(action.payload,state.data))
        case FETCH_PROJECT:
            return state.data.map(pro=> pro.projectId === action.payload)
        default :
            return state;
            
    }
}
function editTheProject(editedProject,allProjects){
    return {data :allProjects.map(pro=>{
        if(pro.projectId === editedProject.projectId){
            pro.projectTitle=editedProject.projectTitle;
            pro.subProjects=editedProject.subProjects;
        }
        return pro;
    })}
}

function removeProjectSpecified(projectToRemove,allProjects){
    return { data:allProjects.filter(pro=>pro.projectId !== projectToRemove.projectId)}
}

function getNewProjectId(projects){
    console.log("all the projects present :",projects)
    if(projects.length === 0){
        return 1
    }
    else{
        return projects[projects.length-1].projectId+1
    }
}

export default projectReducer;