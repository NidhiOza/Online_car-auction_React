import React from 'react';
import Navbar from './Navbar';

const AuctionCalendar = () => {
  return (
    <section>
      <div className="container">
        <Navbar/>
        <div className="today_auction_head">
          <h1>Auctions Calendar</h1>
        </div>
        <div className="row mt-5">
            <div className="col-md-9">
            <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Auction Time</th>
                <th scope="col">
                    Monday
                    05/23/2022
                </th>
                <th scope="col">
                    Tuesday
                    05/24/2022
                </th>
                <th scope="col">
                    Wednesday
                    05/25/2022
                </th>
                <th scope="col">
                    Thursday
                    05/26/2022
                </th>
                <th scope="col">
                    Friday
                    05/27/2022
                </th>
                <th scope="col">
                    Saturday
                    05/28/20
                </th>
                <th scope="col">
                    Sunday
                    05/29/2022
                </th>
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
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
            </div>
            <div className="col-md-9">
            <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Auction Time</th>
                <th scope="col">
                    Monday
                    05/23/2022
                </th>
                <th scope="col">
                    Tuesday
                    05/24/2022
                </th>
                <th scope="col">
                    Wednesday
                    05/25/2022
                </th>
                <th scope="col">
                    Thursday
                    05/26/2022
                </th>
                <th scope="col">
                    Friday
                    05/27/2022
                </th>
                <th scope="col">
                    Saturday
                    05/28/20
                </th>
                <th scope="col">
                    Sunday
                    05/29/2022
                </th>
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
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
            </div>
          <div className="col-md-3 rounded shadow p-3 h-100 mt-(-5)" style={{marginTop: "-15%"}}>
            <h3>About Auctions Calendar</h3>
            <p>
              As one of Canada’s top insurance vehicle and salvage vehicle auctions Copart has locations located across Canada. We are an online car auction hosting all of our auctions online.
              Check out which Copart live auctions are running now and view the Sales list or Join the auction now! Don’t miss out on your opportunity to bid and win some great vehicles in Copart’s live online auctions.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AuctionCalendar;