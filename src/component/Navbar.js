import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';


const Navbar = () => {
    
  return (
    <nav className="navbar navbar-expand-sm bg-white navbar-success">
            <NavLink className="navbar-brand" to="/"><img src={logo} alt="Auction" width={200} height={90}/></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/inventory">Inventory</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                    Auction
                </NavLink>
                <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/todayauction">Today's Auction</NavLink>
                    <NavLink className="dropdown-item" to="/auctionCalendar">Auctiom Calendar</NavLink>
                    <NavLink className="dropdown-item" to="/joinAuction">Join Auction</NavLink>
                </div>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/sellVehicle">Sell a Vehicle</NavLink>
            </li>
            <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                    Service & Support
                </NavLink>
                <div className="dropdown-menu">
                    <NavLink className="dropdown-item" to="/brokers">Information of brokes</NavLink>
                    <NavLink className="dropdown-item" to="/contactUs">Contact Us</NavLink>
                    <NavLink className="dropdown-item" to="#">FAQs</NavLink>
                </div>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/signup">Signup</NavLink>
            </li>
        </ul>
    </div>  
    </nav>
  )
}

export default Navbar;