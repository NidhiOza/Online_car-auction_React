import React from "react";
import { useEffect, useState } from "react";

const FirstScreen = () => {

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const loadData = async() =>{
  //       // Wait for two second
  //       await new Promise((r) => setTimeout(r, 2000));
  
  //       // Toggle loading state
  //       setLoading((loading) => !loading);      
  //   };
  //   loadData();
  // }, [])

  // // return (
  //   if(loading) {
  //     return <div>
  //       loading now
  //     </div>
  //   }
  //   else {
  //     return (
  //       <div>
  //         <p>first screen</p>
  //       </div>
  //     )
  // }
  return(
    <div>
      First Screen
    </div>
  )
  // );
}

export default FirstScreen;
