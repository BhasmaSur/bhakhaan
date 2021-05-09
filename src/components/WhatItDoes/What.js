import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import InfoIcon from '@material-ui/icons/Info';
import "./What.css";

function What() {
    return (
        <div className="what-container">
            <div className="what-heading">
                <h1>What It Does ?</h1>
            </div>
            <div className="what-list">
                <div className="what-item">
                    <div className="circle-container">
                        <div className="dot">
                        <AssignmentIndIcon style={{ fontSize: 40 }}/>
                        </div>
                    </div>
                    <p className="text-style">Save And Share Your Skill Profile</p>
                </div>
                <div className="what-item">
                <div className="circle-container">
                    <div className="dot">
                    <ShoppingCartIcon style={{ fontSize: 40 }}/>
                    </div></div>
                    <p className="text-style">Allows To Buy And Sell Project</p>
                </div>
                <div className="what-item">
                <div className="circle-container">
                <div className="dot">
                    <DeveloperModeIcon style={{ fontSize: 40 }}/>
                    </div></div>
                    <p className="text-style">Allows to hire the Developer</p>
                </div>
            </div>
            <div className="what-caution">
                <div className="what-icon">
                    <InfoIcon style={{ fontSize: 40 }}/>
                </div>
                <div className="what-caution-text">
                   <p>Your Contact Information is safe with us.</p> 
                </div>
            </div>
        </div>
    )
}
export default What
