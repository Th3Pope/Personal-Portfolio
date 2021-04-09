import React from 'react';
import css from './ContactMe.module.css';
import {useForm} from 'react-hook-form';
import emailjs from 'emailjs-com';
import Typing from 'react-typing-animation';



function ContactMe() {

    let {register, handleSubmit, errors} = useForm();
    let onSubmit = (data, e) => {

        //convert form to data readable by emailjs
        let toEmailJS = {
            name: data.name,
            email: data.email,
            messageBody: data.messageBody
        };

        emailjs.send('service_5nsxh42', 'template_ggqaqkj'
            , toEmailJS, 'user_j92v1yE1AUUlbid9Hqzzk')
            .then(
                function (response) {
                    console.log('Success', response.status, response.text);
                    alert('Success! Lynn will be in contact soon!');
                    e.target.reset(); //empties the values.
                },
                function (err) {
                    alert('Sorry but there was an error, please try again.')
                });
    }
    return (
        <div className={css.Container}>

       <div className={css.H1}>Lets Connect!</div>

            <div className={css.Center}>

                <form className={css.Grid} onSubmit={handleSubmit(onSubmit)}>

                    <h5 className={css.Name} >Name:</h5>
                    <input className={css.TextInput} name={'name'} placeholder={'  Name'} ref={register({required: true})}/>
                    {errors.name && <span className={css.Error}>... I know you have a name.</span>}

                    <h5 className={css.Pad}>Email:</h5>
                    <input className={css.TextInput} name={'email'}  placeholder={'  Email'} ref={register({required: true, pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }})}/>
                    {errors.email && <span className={css.Error}>... I need your email to respond.</span>}

                    <h5 className={css.Pad}>Message Lynn:</h5>
                    <textarea name={'messageBody'} placeholder={'  Make my day!'} ref={register} className={css.PadBtm}/>

                    <input className={css.TextInput} type={"submit"} value={'Send!'} className={css.Button}/>
                </form>
            </div>

        </div>
    );
}

export default ContactMe;
