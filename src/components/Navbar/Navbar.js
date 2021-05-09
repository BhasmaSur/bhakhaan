import React, {useState,useEffect} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar() {

    const [enableMenu,handleMenu] = useState(false);
    const [button,setButton]=useState(true);

    const showButton=()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    const handleMenuClick=()=>{
        handleMenu(!enableMenu);
    }
    const closeMobileMenu=()=>{
        handleMenu(false);
    }

    useEffect(() => {
     
    }, [])
    
    window.addEventListener("resize",showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Bhakhaaaaaaan
                    </Link>
                    <div className='menu-icon' onClick={handleMenuClick}>
                        { enableMenu?<CloseIcon className="menu-color"/>: <MenuIcon className="menu-color"/>}
                    </div>
                    <ul className={enableMenu ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                What it does
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Explore Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        {<button className="btn btn--outline btn--medium">Sign Up</button>}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
