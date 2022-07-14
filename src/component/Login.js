import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import Axios from 'axios';     //js library for hTTP request.connect to the database
import signup from "../images/Signup.png";

import { useNavigate } from 'react-router-dom';   //enables to implement dynamic routing in a web app
const Login = () => {

    //usestate - Is a hook that allow us to have state variables in functional components.
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [userinfo, setUserInfo] = useState([]);
    const navigate = useNavigate();
    const nameOnChange = (e) => {
        console.log('name', e.target.value)
        setName(e.target.value);
    }

    const passwordOnChange = (e) => {
        console.log('password', e.target.value)
        setPassword(e.target.value);
    }

    const putUserItem = (e) => {
        e.preventDefault()
        console.log('here')
        Axios.post('http://localhost:3002/api/signin/', {
            name:      name,
            password:   password,
        }).then((result) => {
            console.log("userinfo", result);
            setUserInfo([
                ...userinfo,
                {
                    name:       name,
                    password:   password,
                },
            ]);
            navigate('/inventory')
        }).catch((err) => {
            console.log("error", err);
        });
    };
    
    return (
        <section>
            <div className="container">
                
                <div className="row pt-5 h-100vh">
                    <div className="col-md-6 rounded shadow p-3">
                        <h1 className='text-center'>Login</h1>
                        <form className="row g-3" action="#">
                            <div className="col-md-12">
                                <label htmlFor="inputUserName" className="form-label">User Name / Email</label>
                                <input type="text" className="form-control" value={ name } placeholder="Enter your name" onChange={ nameOnChange }/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputPassword" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword" value={password} placeholder="Enter your password" onChange={ passwordOnChange }/>
                            </div>
                            <div className="col-12">
                                {/* <NavLink to="/inventory" className="btn btn-primary">Login</NavLink>  */}
                                <button type='button' onClick={putUserItem} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 mx-auto h-100vh d-flex justify-content-center align-items-center">
                        <img src={signup} alt="image" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Login