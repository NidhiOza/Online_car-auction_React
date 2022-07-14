import React from "react";
    const SellScreen = () => {
           
        return(
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>Welcome My Homepage</h1>
                </div>
                <nav className="navbar navbar-expand-sm bg-white navbar-success">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inventory</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Auction
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Today's Auction</a>
                                    <a className="dropdown-item" href="#">Auctiom Calendar</a>
                                    <a className="dropdown-item" href="#">Join Auction</a>
                                </div>
                            </li>
                       
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                    Service & Support
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Information of brokes</a>
                                    <a className="dropdown-item" href="#">FAQs</a>
                                    <a className="dropdown-item" href="#">Contact Us</a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Signup</a>
                            </li>
                        </ul>
                    </div>  
                </nav> 
                <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div className="fakeimg">Fake Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>Some Links</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <ul className="nav nav-pills flex-column">
                    
                    </ul>
                    <hr className="d-sm-none"/>
                    </div>
                    <div className="col-sm-8">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="fakeimg">Fake Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <br/>
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg">Fake Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                </div>        
            </div>
            
        )
    }


export default SellScreen;
