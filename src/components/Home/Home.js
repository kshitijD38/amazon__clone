import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://pngimg.com/uploads/trian/trian_PNG16641.png"
          alt=""
        />
        {/* <img src="https://unsplash.com/photos/qHAPsjrp0Gc" /> */}
        <div className="home_row"></div>
        <div className="home_row"></div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
