import './App.css';
import {useState,useEffect} from "react";
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from "../src/components/pages/Dashboard/Dashboard";
import EditProfile from "../src/components/pages/EditProfile/EditProfile"
import Test from './components/Test/Test';
import { Provider } from "react-redux";
import store from "./Redux/Store"


function App() {

  const [boolShowNavBar,setNavbar]=useState(true);
  const [currentURL,setCurrentUrl]=useState(window.location.href);
  const setUpPostUpdate=()=>{
    if(currentURL.includes("edit-profile")){
        setNavbar(false);
        console.log("no issues");
      }
      else{
        setNavbar(true);
      }
  }
  useEffect(() => {
    setUpPostUpdate()
  }, [])
  return (
    <Provider store={store}>
      <Router>
        {boolShowNavBar && <Navbar />}
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/edit-profile" exact component={EditProfile} />
            <Route path="/test" exact component={Test} />
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
