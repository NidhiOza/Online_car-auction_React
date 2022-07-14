import React from 'react'
import Navbar from './Navbar'

const JoinAuction = () => {
  return (
    <section>
        <div className="container">
          <Navbar/>
            {/* <div className="join_auction mt-5">
                <h3 className='text-center'>Join Auction</h3>
            </div> */}
            <div className="row mt-5 pt-5">
                <div className="col-md-10 offset-1 rounded shadow">
                    <h5>Auctions Today </h5>
                    <table className="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th colspan="3">Live Auction</th>
                      </tr>
                    </thead>
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Location</th>
                <th scope="col">Lane</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10.00</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
            </tbody>
                    </table>
                    <table className="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th colspan="3">Later Today Auction</th>
                      </tr>
                    </thead>
            <thead>
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Location</th>
                <th scope="col">Lane</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12.00</td>
                <td>Mark</td>
                <td>Mark</td>
              </tr>
            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JoinAuction