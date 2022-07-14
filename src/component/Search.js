import React from "react";
import InventoryData from "./InventoryData";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Bid from "./Bid";

const Search = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {props.data.map((e, index) => {
          const {
            car_id,
            car_model,
            car_year,
            car_make,
            price,
            img: image,
          } = e;

          return (
            <div className="col-md-3 mb-3" key={index}>
              <div className="card">
                <img src={image} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h5 className="card-title">Model : {car_model}</h5>
                  <p className="card-text">year : {car_year}</p>
                  <p className="card-text">Make : {car_make}</p>
                  <p className="card-text">Price : {price}</p>
                  <Link to={`/car/${car_id}`}>
                    {" "}
                    <a className="btn btn-primary">Bid</a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Search;
