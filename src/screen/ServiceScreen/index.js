import React from "react";
    const ServiceScreen = () => {

        return(
            <div className="container">
             Service Screen
        
                <select>
                  <option value="Ford">Today's Auction</option>
                  <option value="Volvo" selected>Auction Calendar</option>
                    <option value="Fiat">Join Auction</option>
                </select>
          
          

             </div>
        )
    }


export default ServiceScreen;
