import React from "react";

const InventoryScreen = () => {

  return(
    <div className="container">
        Inventory Screen
        {/* search bar start */}
        <div>
            <div className="form-inline">
                <input type="email" className="form-control" placeholder="Free to Search"></input>
                <input type="password" className="form-control" placeholder="Categories" ></input>
                <input type="password" className="form-control" placeholder="make" ></input>
                <input type="password" className="form-control" placeholder="model" ></input>
            </div>
            <div className="form-inline">
                <input type="password" className="form-control" placeholder="year" ></input>
                <input type="password" className="form-control" placeholder="location" ></input>
                <input type="password" className="form-control" placeholder="vise" ></input>
                <input type="password" className="form-control" placeholder="filters" ></input>
            </div>
        </div>
        {/* search bar end */}
        {/* car basic info start */}
        <div>

        </div>
        {/* car basic info end */}

    </div>
  )
}

export default InventoryScreen;
