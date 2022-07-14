import React from "react";
import Navbar from "./Navbar";

const TodayAuction = () => {
  return (
    <section>
      <div className="container">
        <Navbar />
        <div className="today_auction_head">
          <h1>Today's Auctions</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-8">
            <h5 className="mb-3">Auctions Live Right Now</h5>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sale Time</th>
                  <th scope="col">Sale Name</th>
                  <th scope="col">Region</th>
                  <th scope="col">Sale Type</th>
                  <th scope="col">Sale Highlights</th>
                  <th scope="col">Lane</th>
                  <th scope="col">Items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11.00</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>11.00</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>11.00</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-8 mt-5">
            <h5 className="mb-3">Auctions Later Today</h5>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sale Time</th>
                  <th scope="col">Sale Name</th>
                  <th scope="col">Region</th>
                  <th scope="col">Sale Type</th>
                  <th scope="col">Sale Highlights</th>
                  <th scope="col">Lane</th>
                  <th scope="col">Items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11.00</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>11.00</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>11.00</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="col-md-4 rounded shadow p-3 h-100 mt-(-5)"
            style={{ marginTop: "-10%" }}
          >
            <h3>About Auctions</h3>
            <p>
              As one of Canada’s top insurance vehicle and salvage vehicle
              auctions Copart has locations located across Canada. We are an
              online car auction hosting all of our auctions online. Check out
              which Copart live auctions are running now and view the Sales list
              or Join the auction now! Don’t miss out on your opportunity to bid
              and win some great vehicles in Copart’s live online auctions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayAuction;
