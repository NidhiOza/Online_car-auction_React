import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import Navbar from './Navbar';
import PhoneInput from 'react-phone-number-input';
import Axios from 'axios';

import signup from "../images/Signup.png";


function SignUp() {
    const [email, setEmail] = useState();
    const [name, setName]   = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword]   = useState();
    const [confirmpassword, setConfirmpassword]     = useState();
    const [userinfo, setUserInfo]   = useState([]);

    const emailOnChange = (e) => {
        console.log('name',e.target.value)
        setEmail(e.target.value);
    }

    const nameOnChange = (e) => {
        console.log('name',e.target.value)
        setName(e.target.value);
    }

    const passwordOnChange = (e) => {
        console.log('name',e.target.value)
        setPassword(e.target.value);
    }

    const confirmpasswordOnChange = (e) => {
        console.log('name',e.target.value)
        setConfirmpassword(e.target.value);
    }

    const submitUserData = (e) => {
        Axios.post('http://localhost:3002/api/signup', {
            email:      email,
            name:       name,
            phone:      phone,
            password:   password,
            phone:      phone,
            confirmpassword:    confirmpassword,
        }).then((result) => {
            e.preventDefault()
             alert('Data Inserted Successfully');
            setUserInfo([
                ...userinfo,
                {
                    email:  email,
                    name:   name,
                    phone:  phone,
                    password:   password,
                    confirmpassword:    confirmpassword,
                },
            ]);
        });
    };

    return (
        <section>
        
            <div className="container">
            <Navbar/>
                <div className="row ">
                    <div className="col-md-6 rounded shadow p-3">
                        <h1 className='text-center'>Sign Up</h1>
                        <form className="row g-3" onSubmit={ submitUserData } >
                            <div className="col-md-12">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" value={email} onChange={ emailOnChange } placeholder="Enter your email"/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputUserName" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="inputUserName" value={name} onChange={ nameOnChange } placeholder="Enter your name" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPhone" className="form-label">Phone</label>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={ phone }
                                    onChange={ setPhone }
                                />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="confirmPhone" className="form-label">Password</label>
                                <input type="password" className="form-control" id="confirmPhone" value={password} onChange={ passwordOnChange } placeholder="Enter your password"/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="inputConfirmPassword" value={confirmpassword} onChange={ confirmpasswordOnChange } placeholder="Confirm your password"/>
                            </div>
                            <div className="col-12">
                                {/* <NavLink > */}
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                {/* </NavLink> */}
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 mx-auto h-100vh d-flex justify-content-center align-items-center">
                        <img src={ signup } alt="signup" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp