import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// import FirstScreen from './screen/firstScreen';
// import LoginScreen from './screen/Auth/LoginScreen';
// import SignupScreen from "./screen/Auth/SignupScreen";
// import InventoryScreen from "./screen/InventoryScreen";
// import AuctionScreen from "./screen/AuctionScreen/TodayAuctionScreen";
// import AuctionCalendarScreen from "./screen/AuctionScreen/AuctionCalendar";
// import JoinAuctionScreen from "./screen/AuctionScreen/JoinAuction";
// import TodayAuctionScreen from "./screen/AuctionScreen/TodayAuctionScreen";
// import SellScreen from "./screen/SellScreen";
// import ServiceScreen from "./screen/ServiceScreen";
import BrokesScreen from "./screen/ServiceScreen/Brokes";
// import ContactScreen from "./screen/ServiceScreen/Contact";
// import FAQsScreen from "./screen/ServiceScreen/FAQs";
// mda start
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Inventory from "./component/Inventory";
// import Navbar from "./component/Navbar";
import TodayAuction from "./component/TodayAuction";
import AuctionCalendar from "./component/AuctionCalendar";
import JoinAuction from "./component/JoinAuction";
import Brokers from "./component/Brokers";
import ContactUs from "./component/ContactUs";
import SellVehicle from "./component/SellVehicle";
import Bid from "./component/Bid";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<BrokesScreen />} />
          <Route path="/car/:id" element={<Bid />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/todayauction" element={<TodayAuction />} />
          <Route path="/auctionCalendar" element={<AuctionCalendar />} />
          <Route path="/joinAuction" element={<JoinAuction />} />
          <Route path="/brokers" element={<Brokers />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/sellVehicle" element={<SellVehicle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
