import React from 'react';
import ProjectTab from "../../ProjectTab/ProjectTab";
import UserDetail from "../../UserDetail/UserDetail";
import Category from "../../Category/Category";
import "./EditProfile.css";
function EditProfile() {
    //================================ demo data ===================================
    const userDetails ={
        id:1,
        user_name:"rahul chaurasiya",
        title : "ENGINEER",
        mobile : "888888888",
        email : "rahul@gmail.com",
        About : "5+ year of full stack experiance",
        freelancer:"1",
        pic_id:"T565828",
    }
    const userCategoryList={
        REACT:[
            {
                project_id:1,
                project_name:"somthing ranodm 1"
            },
            {
                project_id:2,
                project_name:"somthing ranodm 2"
            },
            {
                project_id:3,
                project_name:"somthing ranodm 3"
            }
        ],
        NEXT:[
            {
                project_id:4,
                project_name:"enso automation india"
            },
            {
                project_id:5,
                project_name:"somthing ranodm 5"
            },
        ],
        ANGULAR:[
            {
                project_id:6,
                project_name:"moogle.com"
            }
        ]

    }

    const projects=[
        {
            project_id:1,
            project_title:"somthing random 1",
            sub_projects:[
                {
                    sub_project_id:1,
                    sub_project_type:"WEBSITE",
                    title:"random UI",
                    description:"UI",
                    url:"https://ensoautomationindia.com",
                    categories:"REACT",

                },
                {
                    sub_project_id:2,
                    sub_project_type:"API",
                    title:"random API",
                    description:"API",
                    url:"https://ensoautomationindia.com",
                    categories:"REACT",
                    headers:"bla bla",
                    method:"POST",
                    request_payload:"{adb ajd ajs das dad ad jasdbja djabd }",

                }

            ]
            
        },
        {
            project_id:2,
            project_title:"Yoga asanaaa ",
            sub_projects:[
                {
                    sub_project_id:1,
                    sub_project_type:"YOGA",
                    title:"random POSE",
                    description:"POSE",
                    pic_id:"Tabsd ha",
                    categories:"ASAN",

                },
                {
                    sub_project_id:2,
                    sub_project_type:"BEFORE_AND_AFTER",
                    title:"random baa",
                    description:"baa",
                    pic_before_id:"TVAD D",
                    caption_before:"6 months back",
                    caption_after:"6 month after",
                    pic_after_id:"T697787",
                    categories:"REACT"
                }

            ]
            
        }
    ]
    //================================ XXXXXXXXX ===================================
    return (
        <div>
            <UserDetail/>
            <div className="project-box">
                <Category/>
                <ProjectTab/>
            </div>
        </div>
    )
}

export default EditProfile
