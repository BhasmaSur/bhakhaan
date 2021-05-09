import React from 'react'
import ProjectTool from "../ProjectTool/ProjectTool";
import ProjectData from "../ProjectData/ProjectData";
import "./ProjectForm.css";
function ProjectForm({currentPage}) {

    return (
        <div className="project-form-container">
            <div className="project-data-container">
                <ProjectData currentPage={currentPage}/>
            </div>
            <div className="project-tool-container">
                <ProjectTool currentPage={currentPage}/>
            </div>
            
        </div>
    )
}

export default ProjectForm
