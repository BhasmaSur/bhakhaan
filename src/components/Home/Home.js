import React from 'react';
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
                <h1>WANNA SHOW OFF YOUR SKILLS</h1>
                <p>Create Your Portfolio And Share With Anyone</p>
                <div className="home-btns">
                    <button className="btns btn--outline btn--large">
                        Get Started
                    </button>
                    <button className="btns btn--primary btn--large">
                        How It Works
                    </button>
                </div>
        </div>
    )
}

export default Home




//rfce