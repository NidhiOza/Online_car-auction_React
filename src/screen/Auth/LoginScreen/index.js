import React from "react";

const LoginScreen = () => {

  return(
    <div className="container">
        Login Screen
        <div>
            <div className="form-group">
                <label htmlFor="usr">Username/Email:</label>
                <input type="text" className="form-control" id="usr"></input>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd"></input>
            </div>
            <button type="button" className="btn btn-primary">Login</button>
            <div>
                <a href="#">forgot password?</a>

            </div>
        </div>
    </div>
  )
}

export default LoginScreen;
