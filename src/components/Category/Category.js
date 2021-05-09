import React,{useState} from 'react';
import "./Category.css";
import DropDownMM from '../DropDownMM/DropDownMM';
function Category() {

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
    const boolClicked=true;
    
    const arrayTest= Object.keys(userCategoryList);
    return (
        <div className="category-container">
            <div className="section-name">
                <p>Categories</p>
            </div>
            {arrayTest.map(category=>{
                return (
                    <DropDownMM heading={category} values={userCategoryList[category]} valueToShow={"project_name"}/>
                )
            })}
        </div>
    )
}

export default Category
