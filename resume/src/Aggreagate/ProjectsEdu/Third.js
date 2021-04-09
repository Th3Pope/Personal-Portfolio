import React from 'react';
import css from './Third.module.scss';
import Projects from './Projects';
import CwuLogo from '../../Assets/CWU_Medallion.jpg';
import YvcLogo from '../../Assets/yvclogoUGLY.png';
import Typing from "react-typing-animation";

function Third() {

    return (
        <React.Fragment>
            <div className={css.Container}>
                <Typing speed={100} loop={true}>
                    <h1 className={css.H1}>TL;DW</h1>
                    <Typing.Delay ms={2000}/>
                    <Typing.Backspace count={5}/>
                </Typing>
                <h5 className={css.H5Txt}>(Too long; didn't watch)</h5>
                <div className={css.Box}>
                    <h2 className={css.H2}>I am well educated:</h2>
                    <ul className={css.EduTbl}>
                        <li className={css.LiElements}>
                            <div className={css.LogoContainer}>
                                <img src={CwuLogo} className={css.Logo} alt={""}/>
                                <div className={css.Overlay}>
                                    <div style={{width: '80%'}}>
                                    <h3><b>Bachelors of Science</b></h3>
                                    <h5 className={css.Border}>Major Computer Science</h5>
                                    <h5>Minor Cyber Security</h5>
                                    <div className={css.Border}>
                                        <li>
                                            <h7>Central Washington University</h7>
                                        </li>
                                        <li>
                                            <h8>Ellensburg, WA</h8>
                                        </li>
                                        <li className={css.Border}>
                                            <h8>2021</h8>
                                        </li>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={css.LiElements}>
                            <div className={css.LogoContainer}>
                                <img src={YvcLogo} className={css.Logo} alt={""}/>
                                <div className={css.Overlay}>
                                    <div style={{width: '80%'}}>
                                    <h3 className={css.AA}><b>Associates of Arts</b></h3>
                                    <h5 className={css.Border}>General Education</h5>
                                    <div className={css.Border}>
                                        <li>
                                            <h7>Yakima Valley College</h7>
                                        </li>
                                        <li>
                                            <h8>Yakima, WA</h8>
                                        </li>
                                        <li className={css.Border}>
                                            <h8>2018</h8>
                                        </li>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <Projects/>
            </div>
        </React.Fragment>
    );
}

export default Third;
