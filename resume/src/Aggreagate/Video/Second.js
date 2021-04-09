import React from 'react';
import css from './Second.module.css';
import Player from "./Player";
import Typing from 'react-typing-animation';

function Second() {

    return (

            <div className={css.Container}>
                <Typing speed={100} loop={true}>
                    <h1 className={css.Text}>His own video?!</h1>
                    <Typing.Delay ms={2000}/>
                    <Typing.Backspace count={22}/>
                </Typing>
                <div className={css.PointerBox}>
                    <div className={css.PlayerFrame}>
                        <Player/>
                    </div>
                    <p className={css.Warning}>** Warning: will make you want to hire me, also it might be loud. **</p>
                </div>
            </div>

    );
}

export default Second;
