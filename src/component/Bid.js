import Axios from "axios";
import { timers } from "jquery";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Bid = () => {
  const params = useParams();
  const [carDetails, setCarDetails] = useState({});
  const [timeLeft, setTimeLeft] = useState(10);
  const [isCountDownActive, setIsCountDownActive] = useState(false);
  const [isAuctionStart, setIsAuctionStart] = useState(false);
  const bidBtn = useRef();

  const fetchCarDetails = async () => {
    const car = await Axios.get(`http://localhost:3002/vehicle/${params.id}`);
    setIsAuctionStart(
      new Date(car.data.vehicleList[0].bid_start_time) < Date.now()
    );
    setCarDetails(car.data.vehicleList[0]);
  };

  useEffect(() => {
    setInterval(fetchCarDetails, 3000);
  }, []);

  const counter = () => {
    if (isCountDownActive) {
      setTimeLeft(timeLeft - 1);
    }
    if (timeLeft - 1 <= 0) {
      bidBtn.current.disabled = true;
    }
  };

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(counter, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, isCountDownActive]);

  const handleBid = async () => {
    await Axios.patch(`http://localhost:3002/vehicle/${params.id}`, {
      price: Number(carDetails.price) + 1000,
    });
    await fetchCarDetails();
    setTimeLeft(10);
    setIsCountDownActive(true);
  };

  const {
    car_id,
    carName,
    Model,
    VIN,
    odometer,
    highlights,
    primaryDamage,
    color,
    vehicleType,
    fuel,
    keys,
    price,
    image,
    bid_start_time,
  } = carDetails;

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="card">
          <img
            src={image}
            className="card-img-top"
            style={{ height: "13rem" }}
            alt="image"
          />
          <div className="card-body">
            <h5 className="card-title">{carName}</h5>
            <p className="card-text">Model : {Model}</p>
            <p className="card-text">VIN : {VIN}</p>
            <p className="card-text">highlights : {highlights}</p>
            <p className="card-text">primaryDamage : {primaryDamage}</p>
            <p className="card-text">vehicleType : {vehicleType}</p>
            <p className="card-text">color : {color}</p>
            <p className="card-text">fuel : {fuel}</p>
            <p className="card-text">keys : {keys}</p>
            <p className="card-text">price : {price}</p>
            <span className="d-flex justify-content-center">
              {isAuctionStart ? (
                <button
                  className={`btn btn-primary`}
                  onClick={handleBid}
                  ref={bidBtn}
                >
                  Bid
                </button>
              ) : (
                <span>
                  Bid starts in{" "}
                  {parseInt(
                    (Math.abs(Date.now() - new Date(bid_start_time)) /
                      (1000 * 60)) %
                      60
                  ) + 1}{" "}
                  Minutes
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <h5>Time : {timeLeft}</h5>
      </div>
    </React.Fragment>
  );
};

export default Bid;
