import React,{useState} from 'react'
import "./Buy.css";
import SearchIcon from '@material-ui/icons/Search';

function Buy() {
    const searcResult=[
        "REACT",
        "ANGULAR",
        "YOGA",
        "GOOGLE MAPS",
        "WEB"
    ]
    const queriedResult=[
        {
            title:"moogle jsad",
            description: " kasdas jas djasd ashd ashdasvdyas dsahd has dasjduasbd sajd suadbjas djasbdusa dsajdbuasbdjas dusa djas  jsabdj",
            categories:"REACT, ANGULAR, MATHS",
            developer:"asjdb jasd askdn"

        },
        {
            title:"moogle jsad",
            description: " kasdas jas djasd ashd ashdasvdyas dsahd has dasjduasbd sajd suadbjas djasbdusa dsajdbuasbdjas dusa djas  jsabdj",
            categories:"REACT, ANGULAR, MATHS",
            developer:"asjdb jasd askdn"

        },
        {
            title:"moogle jsad",
            description: " kasdas jas djasd ashd ashdasvdyas dsahd has dasjduasbd sajd suadbjas djasbdusa dsajdbuasbdjas dusa djas  jsabdj",
            categories:"REACT, ANGULAR, MATHS",
            developer:"asjdb jasd askdn"

        },
        {
            title:"moogle jsad",
            description: " kasdas jas djasd ashd ashdasvdyas dsahd has dasjduasbd sajd suadbjas djasbdusa dsajdbuasbdjas dusa djas  jsabdj",
            categories:"REACT, ANGULAR, MATHS",
            developer:"asjdb jasd askdn"

        },
        {
            title:"moogle jsad",
            description: " kasdas jas djasd ashd ashdasvdyas dsahd has dasjduasbd sajd suadbjas djasbdusa dsajdbuasbdjas dusa djas  jsabdj",
            categories:"REACT, ANGULAR, MATHS",
            developer:"asjdb jasd askdn"

        }
    ]
    const topTenProjects=[
        {
            name:"moogle",
            description:"asd  ajsd asjd asdjsabd sajd asjdasbjd",
            developer:"a sdaasd asdk "
        },
        {
            name:"moogle",
            description:"asd  ajsd asjd asdjsabd sajd asjdasbjd",
            developer:"a sdaasd asdk "
        },
        {
            name:"moogle",
            description:"asd  ajsd asjd sdfdsfdsfdsfsdfsdfsdfsdfsdfds jdsfds fjdsjf dsjf sd sajd asjdasbjd",
            developer:"a sdaasd asdk "
        },
        {
            name:"moogle",
            description:"asd  ajsd asjd asdjsabd sajd asjdasbjd",
            developer:"a sdaasd asdk "
        },
        {
            name:"moogle",
            description:"asd  ajsd asjd adsfsdfdsfsdfdsfdssdjsabd sajd asjdasbjd",
            developer:"a sdaasd asdk "
        }
    ]
    const [boolResultPresent,setSearchResult]=useState(false);
    const showSearchResults=(event)=>{
        console.log(event.target.value);
        let val=event.target.value;
        if(val === ""){
            setSearchResult(false);
        }
        else{
            setSearchResult(true);
        }
        
    }
  

    return (
        <div className="buy-container">
            <div className="buy-heading">
                <h1>Explore Projects</h1>
                <p>(Buy/Hire)</p>
            </div>
            <div className="search-bar">
                <div className="content-box">
                    <div className="box-outer">
                        <div className="search-outer">
                            <div className="btnDiv">
                            <SearchIcon/>
                            </div>
                            <input type="text" className="buy-input" placeholder="Enter keyword" onKeyUp={showSearchResults}/>
                        </div>
                        {boolResultPresent && <hr className="search-line"></hr>}
                        <div className="search-list">
                        {boolResultPresent && searcResult.map((item,index)=>(
                                <div key={index}>{item}</div>
                            ))}
                        </div>
                    </div>
                    <div className="returned-data-box">
                        {queriedResult.map((item,index)=>(
                            <div className="returned-item" key={index}>
                                <p className="returned-heading">{item.title}</p>
                                <p className="returned-desc">{item.description}</p>
                                <p className="returned-categories">Categories : {item.categories}</p>
                                <p className="returned-dev">Developer : {item.developer}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="box-side">
                    <h1 className="project-heading">Top 5 Projects</h1>
                    {topTenProjects.map((item,index)=>(
                        <div className="project-item" key={index}>
                            <p className="project-name">{item.name}</p>
                            <p className="project-descr">{item.description}</p>
                            <p className="project-dev">{item.developer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Buy

