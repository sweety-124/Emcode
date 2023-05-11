import React, { useEffect, useState } from "react";
import MapView from "./map";
const ListingUI = () => {
  async function fetchData() {
    // You can use await here for asynchronous operations
  }
  useEffect(() => {
    // Call the fetchData function immediately
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <MapView />
      </div>
    </>
  );
};

export default ListingUI;
