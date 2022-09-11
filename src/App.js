import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MapContainer, TileLayer} from 'react-leaflet';

import Home from "./pages/homePage";
import About from "./pages/aboutPage";
import Maps from "./pages/mapsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tentang" element={<About />} />
        <Route exact path="/peta" element={<Maps />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
