import React from 'react';
import css from './VeryTop.module.css';
import pic from '../../Assets/meCtoon.png';
import bubble from '../../Assets/chatbubble8bit.png';
import bubbleHello from '../../Assets/chatbubbleHello.png';
import bubbleWelcome from '../../Assets/chatbubbleWelcome.png';
import Typing from 'react-typing-animation';

function VeryTop() {

    return (

        <div className={css.Container}>
            <div className={css.Container2}>
                <div className={css.Box}>
                    <img src={bubble} alt={'chat bubble'} className={css.Bubble}/>
                    <div className={css.TextBox}>
                        <Typing loop={true}>
                            <Typing.Delay ms={3200}/>
                            Hello, I'm Lynn
                            <Typing.Delay ms={1000}/>
                            <Typing.Backspace count={16}/>

                            Welcome to
                            <Typing.Delay ms={1000}/>

                            <div className={css.SecondLine}>
                                my Portfolio.
                                <Typing.Delay ms={1000}/>
                                <Typing.Backspace count={23}/>
                            </div>
                            <Typing.Reset/>
                        </Typing>
                    </div>
                    <img src={pic} alt={"LinkedIn Pic"} className={css.Image}/>
                </div>
            </div>
            <img src={bubbleHello} alt={'Hello, I\'m Lynn'} className={css.BubbleHello}/>
            <img src={bubbleWelcome} alt={'Welcome to my portfolio'} className={css.BubbleWelcome}/>
        </div>
    );
}

export default VeryTop;
