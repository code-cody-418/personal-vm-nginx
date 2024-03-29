import React from "react";
import { ThreeDScene } from "./scene/ThreeDScene";
import './scene/sceneStyle.css'

//if xr is NOT on load css to hide xr button
const xr = navigator.xr;

if (xr === undefined || null) {
    import('../ui/scene/customVRButtonSettings.css')
}
export const Home = () => {
    return (
        <>
            <ThreeDScene />
            <div className="connect-logos">
                <a href="https://github.com/code-cody-418/personal-vm-nginx/tree/main/public-html/personal-portfolio" target={"blank"}>
                    <img src="code-icon-10.png" alt="Code Logo" className="connect-logo" />
                </a>
                <a href="https://www.linkedin.com/in/code-cody" target={"blank"}>
                    <img src="linked-in-logo-03.png" alt="LinkedIn Logo" className="connect-logo" />
                </a>
                <a href="https://github.com/code-cody-418" target={"blank"}>
                    <img src="github-icon.png" alt="Github Logo" className="connect-logo" />
                </a>
            </div>
        </>
    )
}
