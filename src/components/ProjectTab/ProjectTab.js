import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "../TabPanel/TabPanel";
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import ProjectForm from '../ProjectForm/ProjectForm';
import { useSelector,useDispatch } from "react-redux";
import { addProject,removeProject } from "../../Redux";
import "./ProjectTab.css";
  

  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

  
function ProjectTab() {

  //======================= variables =================================
  const [value, setValue] = useState(0);
  const [booTabRemoved,setBoolTabRemoved]=useState(false);
  const classes = useStyles();
  const arrProjects = useSelector(state => state.data)
  console.log("projects :",arrProjects)
  const dispatch=useDispatch()
  //====================== XXXX ====================================
  //====================== frunctions ==============================
    const handleChange = (event,newValue) => {
      setValue(newValue);  
    };

    const addNewProject=()=>{
      dispatch(addProject())
      setValue(arrProjects.length)
    }

    const removeAddedProject=(pro)=>{
      dispatch(removeProject(pro))
      setBoolTabRemoved(true);
    }
    function adjustTabHandler(){
      if(booTabRemoved){
        if(arrProjects.length === 0){
          setValue(0)
        }
        else if(arrProjects.length === value){
          setValue(value=>value-1)
        }
        else{
          setValue(value=>value)
        }
        setBoolTabRemoved(false);
      }
    }
    useEffect(() => {
      adjustTabHandler()
    }, [booTabRemoved])
  //====================== XXXX ====================================
    return (
        <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          > 
          {arrProjects.map((pro,index)=>(
            <Tab key={index} className="project-tab-tab" label={
              <div className="project-tab-box">
                <p className="project-tab-title">
                {pro.projectTitle}
                </p>
                <div className="project-tab-close">
                  <CancelIcon onClick={()=>removeAddedProject(pro)}/>
                </div>
              </div>
              } {...a11yProps(0)}>
            </Tab>
          ))}
             {(arrProjects.length > 0) && <div className="project-tab-separator"></div>}
            <div className="project-tab-plus" onClick={addNewProject}>
              <AddIcon/>
            </div>
          </Tabs>
        </AppBar>
        {arrProjects.map((currentPage,index)=>(
            <TabPanel key={index} value={value} index={index}>
            <ProjectForm currentPage={currentPage}/>
          </TabPanel>
          ))}
        
      </div>
    )
}

export default ProjectTab
