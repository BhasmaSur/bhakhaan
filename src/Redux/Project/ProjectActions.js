import { ADD_PROJECT,EDIT_PROJECT,REMOVE_PROJECT,FETCH_PROJECT } from "./ProjectTypes"


export const addProject= () =>{
    return {
        type:ADD_PROJECT
    }
}

export const editProject= editedProject =>{
    return {
        type:EDIT_PROJECT,
        payload:editedProject
    }
}

export const removeProject= projectToRemove =>{
    return {
        type:REMOVE_PROJECT,
        payload:projectToRemove
    }
}

export const fetchProject=projectId=>{
    return{
        type:FETCH_PROJECT,
        payload:projectId
    }
}