import '../styles.css';
import { userSchema } from '../Validations/UserValidation';
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


function FormControl2() {


    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confpasswordRef = useRef();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(userSchema),
    });

    const submitForm = (data, e) => {
        console.log(data);
        e.preventDefault();
        nameRef.current = data.name;
        emailRef.current = data.email;
        passwordRef.current = data.password;
        confpasswordRef.current = data.confpassword;
        var element = document.getElementById("card-info");
        element.classList.remove("info-card-hide");
        element.classList.add("info-card");
        console.log(data);

    };

    const myFunction = (data, e) => {
        e.preventDefault();
        data.name = '';
        console.log('hello')
        var elementInput = document.getElementsByTagName("input");
        
        console.log(elementInput[0])
        var element = document.getElementById("card-info");
        element.classList.remove("info-card");
        element.classList.add("info-card-hide");
        console.log('hello4')
    }


    function dataRef(data) {
        console.log(data);
        console.log(nameRef.current);
        console.log(emailRef.current);
        console.log(passwordRef.current);
        console.log(confpasswordRef.current);
    }

    useEffect(() => {
        nameRef.current = ''
        emailRef.current = ''
        passwordRef.current = ''
        confpasswordRef.current = ''
    }, [])


    return (
        <section>
            <form onSubmit={handleSubmit(submitForm)} >
                <div className='form-style'>
                    <label>
                        Name:
                    </label>

                    <input type="text" name="name" ref={nameRef}
                        placeholder='Enter name' {...register('name', { required: true })}
                    />
                    <p>{errors.name?.message}</p>
                    <br />
                    <label>
                        Email
                    </label>

                    <input type="email" name="email" ref={emailRef}
                        placeholder='info@greenbackend.com' {...register('email', { required: true })} />
                    <p>{errors.email?.message}</p>
                    <br />
                    <label>
                        Password
                    </label>

                    <input type="password" name="password" ref={passwordRef}
                        placeholder='Please enter a password of at least 6 digits'
                        {...register('password', { required: true })} />
                    <p>{errors.password?.message}</p>
                    <br />
                    <label>
                        Confirm Password
                    </label>

                    <input type="password" name="confpassword" ref={confpasswordRef}
                        placeholder='Please re-enter the password you entered' {...register('confpassword', { required: true })} />
                    <p>{errors.confpassword?.message}</p>
                </div>
                <input type="submit" value="Sign Up" className='input-submit' />
                <button onClick={handleSubmit(myFunction)} className='input-submit'> Cancel</button>
                <div className='info-card-hide' id='card-info'>
                    <h3 id="name">{nameRef.current}</h3>
                    <h3 id="email">{emailRef.current}</h3>
                    <h3 id="passwd">{passwordRef.current}</h3>
                    <h3 id="confpassword" >{confpasswordRef.current}</h3>
                </div>
            </form >

        </section>
    );
}

export default FormControl2

