import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Car_A from "../images/car_A/1.jpg";
import InventoryData from "./InventoryData";
import Navbar from "./Navbar";
import Bid from "./Bid";
import Search from "./Search";
import Axios from "axios";
const Inventory = () => {
  const [filter, setFilter] = useState("");
  const [carDetails, setCarDetails] = useState([]);
  const [filteredCar, setFilteredCar] = useState([]);

  const inputRef = useRef(null);

  function searchText(e) {
    e.preventDefault();
    setFilter(inputRef.current.value);
    const filteredData = carDetails.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(inputRef.current.value.toString().toLowerCase())
      );
    });
    setFilteredCar(filteredData);
  }

  const fetchCarDetails = async () => {
    const car = await Axios.get(`http://localhost:3002/vehicle`);
    const filteredData = car.data.vehicleList.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(filter.toString().toLowerCase())
      );
    });
    setCarDetails(filteredData);
    setFilteredCar(filteredData);
  };

  useEffect(() => {
    fetchCarDetails();
  }, []);

  return (
    <section>
      <nav className="navbar navbar-expand-lg">
        <div className="container ">
          <Navbar />
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Type to Search"
                aria-label="Search"
                ref={inputRef}
              />
              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={searchText}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <main>
        <Search data={filteredCar} />
      </main>
    </section>
  );
};

export default Inventory;
