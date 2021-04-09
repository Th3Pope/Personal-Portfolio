import css from "./Projects.module.css";
import React from "react";
import PeerConnect from '../../Assets/peerConnect.png';
import Cacula from '../../Assets/pngwing.png';
import ReactTooltip from 'react-tooltip';

function Projects() {

    function gitPeerConnect() {
        window.open('https://github.com/Th3Pope/PeerConnect', '_blank', 'noopener,noreferrer');
    }

    function gitExpire() {
        window.open('http://34.210.77.181/expirely/home.php', '_blank', 'noopener,noreferrer');
    }

    function gitCaculator() {
        window.open('https://github.com/Th3Pope/Calculator--Infix', '_blank', 'noopener,noreferrer');
    }
    function gitResume() {
        window.open('https://github.com/Th3Pope/Personal-Portfolio', '_blank', 'noopener,noreferrer');
    }

    return (
        <div className={css.Container}>
            <div className={css.Box}>
                <h1 className={css.H1}>Check out my projects:</h1>
                <ul className={css.List2}>
                    <li className={css.ImageContainer} onClick={gitPeerConnect}>
                        <img className={css.Image1} src={PeerConnect} alt={"PeerConnectLogo"}></img>
                        <div className={css.Overlay}>
                            <div className={css.PconnectText}>
                                <div style={{fontSize: '20px'}}><b>PeerConnect</b></div>
                                <div className={css.BorderPconnectTxt}>Android Based GPS Messaging App</div>

                            </div>
                            <div className={css.PconnectText} style={{paddingTop: '30px', borderBottom: 'none'}}>Click
                                to View Source Code
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={css.TextProjects}>
                            <li>
                                <h5 className={css.Expire} onClick={gitExpire}>
                                    <a data-tip data-for={'Exp'}> Expire.ly </a>
                                </h5>
                            </li>
                            <ReactTooltip id="Exp" textColor={'#0788de'} backgroundColor={'#2a2d34'}>
                                <span style={{fontSize: '14px'}}>Neat pantry expiration date tracker. Click and make a login!</span>
                            </ReactTooltip>

                            <li className={css.Border}>
                                <h5 className={css.Website}>
                                    <a data-tip data-for={'Web'} onClick={gitResume}>This pretty page!</a>
                                </h5>
                            </li>
                            <ReactTooltip id="Web" textColor={'#0788de'} backgroundColor={'#2a2d34'}>
                                <span style={{fontSize: '14px'}}>I'll show you what else I can make too, well if you pay me! Click to view source code</span>
                            </ReactTooltip>
                        </div>
                    </li>
                    <li className={css.ImageContainer2} onClick={gitCaculator}>

                        <img className={css.Image2}  src={Cacula} alt={"Caculator"}
                             ></img>
                        <div className={css.Overlay2}>
                            <div className={css.CalcText} style={{fontSize: '20px'}}><b>Infix Scientific Calculator</b>
                            </div>
                            <div className={css.PconnectText} style={{paddingTop: '30px', borderBottom: 'none'}}>Click
                                to View Source Code
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Projects;
