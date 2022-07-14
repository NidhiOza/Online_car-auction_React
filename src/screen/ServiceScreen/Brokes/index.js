import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import signup from "../../../images/car_B/1.jpg";
import slider1 from "../../../images/slider_1.png";
import slider2 from "../../../images/slider_2.png";
import InventoryData from '../../../component/InventoryData';
import Navbar from "../../../component/Navbar";
import {MdFacebook} from "react-icons/md";
import {FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";


    const BrokesScreen = () => {
        const [listArray, setListArray] = useState([])
        useEffect(() => {
            handleListCall();
        }, [])

        const handleListCall = async() => {
            const res = await axios.get("http://localhost:3002/vehicle");

            setListArray(res.data.vehicleList)
        }



        return(
            <div className="container">
            <Navbar/>
            {/* carusal start here  */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={slider2} className="d-block w-100 img-fluid h-75" alt="slider_image"/>
                    </div>
                    <div className="carousel-item">
                    <img src={slider1} className="d-block w-100 img-fluid h-100" alt="slider_image"/>
                    </div>
                    <div className="carousel-item">
                    <img src={slider2} className="d-block w-100 img-fluid h-100" alt="slider_image"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            {/* carusal end here  */}
            <div className="populer">
                <h2>Popular Vehicles</h2>
                <div className="container mt-5">
                    <div className="row">

                    {
                        listArray.map((e) => {
                        const{car_model, car_year, car_make, username, phonenumber, price, img} = e;

                        return(
                            <div className="col-md-3"> 
                            {/* key={id} */}
                                <div className="card">
                                    <img src={img} className="card-img-top" alt="#"/> 
                                    <div className="card-body">
                                        <h5 className="card-title">{car_model}</h5>
                                        <p className="card-text">{car_year}</p>
                                        <p className="card-text">{car_make}</p>
                                        <p className="card-text">{username}</p>
                                        <p className="card-text">{phonenumber}</p>
                                        <p className="card-text">{price}</p>
                                        
                                        <Link to={`/car/1`}>
                                             {" "}
                                                <a className="btn btn-primary">Bid</a>
                                         </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }

                    </div>
                </div>
            </div>

        
             <footer className="mx-auto mt-5">
                 <h3 className="text-center">Follow Us</h3>
                 <ul className="mx-auto d-flex flex-row justify-content-center align-items-center">
                     <li className="text-center me-3 fa-2x" style={{listStyle: "none"}}>
                        <MdFacebook/>
                         <a href=""></a>
                     </li>
                     <li className="text-center me-3 fa-2x" style={{listStyle: "none"}}>
                        <FaTwitter/>
                         <a href=""></a>
                     </li>
                     <li className="text-center me-3 fa-2x" style={{listStyle: "none"}}>
                        <FaInstagram/>
                         <a href=""></a>
                     </li>
                     <li className="text-center me-3 fa-2x" style={{listStyle: "none"}}>
                        <FaLinkedin/>
                         <a href=""></a>
                     </li>
                 </ul>
             </footer>
           </div>
        )
    }


export default BrokesScreen;
