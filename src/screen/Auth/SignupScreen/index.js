import React from "react";

const SignupScreen = () => {

  return(
    <div className="container">
        Signup Screen
        <div>
            <div className="form-group">
                <label htmlFor="usr">Email:</label>
                <input type="text" className="form-control" id="usr"></input>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Username:</label>
                <input type="text" className="form-control" id="usr"></input>
            </div>
            <div className="form-group">
                <label htmlFor="usr">Phone:</label>
                <input type="text" className="form-control" id="usr"></input>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd"></input>
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Confirm Password:</label>
                <input type="password" className="form-control" id="pwd"></input>
            </div>            
            <button type="button" className="btn btn-primary">SignUp</button>
        </div>
    </div>
  )
}

export default SignupScreen;
