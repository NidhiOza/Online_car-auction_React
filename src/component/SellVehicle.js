import React, { useState } from "react";
import Navbar from "./Navbar";
import image from "../images/Signup.png";
import Axios from "axios";
import { Component } from "react/cjs/react.production.min";

const SellVehicle = () => {
  const [user, setUser] = useState({
    car_model: null,
    car_year: null,
    car_make: null,
    username: null,
    phonenumber: null,
    price: null,

    // img: null
    //postalcode: null
  });

  const { car_model, car_year, car_make, username, phonenumber, price } = user;

  const onInputChange = (e) => {
    if (e.target.files) {
      setUser({ ...user, [e.target.name]: e.target.files[0] });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
    console.log("e#########", user);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // get, post, put
    console.log(user);
    
    const formData = new FormData();
    
    formData.append("car_model", user.car_model);
    formData.append("car_year", user.car_year);
    formData.append("car_make", user.car_make);
    formData.append("username", user.username);
    formData.append("price", user.price);
    formData.append("phonenumber", user.phonenumber);
    formData.append("img", user.img.name);

    const res = await Axios.post("http://localhost:3002/vehicle/add", formData);
    console.log("res@@@@@@: ", res);
    alert("Data Inserted");
  };

  return (
    <section>
      <div className="container">
        <Navbar />
        <div className="row mt-5 pt-5">
          <div className="col-md-6 mt-5">
            <h1>Sell your Used Car Fast, Safe & Easy</h1>
            <h3 className="mt-3">
              Call <span className="text-primary">(888) 540-7110</span>
            </h3>
            <button className="btn btn-primary rounded mt-3">
              Get Online Offer
            </button>
          </div>
          <div className="col-md-6">
            <img src={image} alt="auction_image" className="img-fluid" />
          </div>
        </div>
        <div className="sell_car mt-5 pt-5">
          <div className="sell_car_head text-center">
            <h2 className="fw-bold">Sell Your Car in Three Easy Steps</h2>
            <p>
              Selling your used, unwanted or total loss vehicle has never been
              faster, easier, and safer. With competitive pricing for vehicles
              based on the latest market trends, we’ll buy your car with fair
              pricing and free towing. Getting cash for cars in Canada has never
              been easier.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <div className="stp1">
                <h2 className="fw-bold">1</h2>
                <h3 className="fw-bold">Get an Offer</h3>
                <p>Call (888) 540-7110 or fill out the Get An Offer form</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="stp2">
                <h2 className="fw-bold">2</h2>
                <h3 className="fw-bold">Schedule Pickup</h3>
                <p>
                  Accept our offer, and we’ll schedule a convenient pickup time.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="stp3">
                <h2 className="fw-bold">3</h2>
                <h3 className="fw-bold">Get Paid</h3>
                <p>We pick up your vehicle and give you payment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="get_an_offer mt-5 pt-5">
          <h2 className="fw-bold text-center ">Get an Offer</h2>
          <form
            action=""
            className="mt-5 rounded shadow p-lg-5"
            onSubmit={(e) => onSubmit(e)}
            enctype="multipart/form-data"
          >
            <h3 className="mb-3">Tell Us About your Vehicle</h3>

            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  placeholder="Enter Model"
                  name="car_model"
                  value={car_model}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="col-md-4">
                <input
                  type="text"
                  placeholder="Enter year"
                  name="car_year"
                  value={car_year}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="col-md-4">
                <input
                  type="text"
                  placeholder="Enter Make"
                  name="car_make"
                  value={car_make}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <h3 className="mt-4 mb-3">Tell Us About Yourself</h3>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-100 mb-3 p-2"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="number"
                  placeholder="Phone"
                  className="w-100 mb-3 p-2"
                  name="phonenumber"
                  value={phonenumber}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="price"
                  placeholder="$ (CAD)"
                  className="w-100 mb-3 p-2"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="col-md-6">
                {
                  <input
                    type="file"
                    placeholder="image"
                    name="img"
                    className="w-100 mb-3 p-2"
                    onChange={(e) => onInputChange(e)}
                  />
                }
              </div>
            </div>
            <button className="btn btn-primary mx-auto">
              Get Your Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SellVehicle;
