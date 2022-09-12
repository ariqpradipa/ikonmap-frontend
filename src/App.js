import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/homePage";
import About from "./pages/aboutPage";
import Maps from "./pages/mapsPage";

export default function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tentang" element={<About />} />
          <Route exact path="/peta" element={<Maps />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </Router>

    </>
  );

  //   const positionMap = [51.505, -0.09]

  //   return (
  //     <>
  //       <div className="w-full h-full container-maps">
  //         <MapContainer style={{height: '100%', width: '100%'}} center={positionMap} zoom={13} scrollWheelZoom={false}>

  //         </MapContainer>
  //       </div>
  //     </>
  //   )
}

