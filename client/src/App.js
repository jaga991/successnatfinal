import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home/Home.js';
import About from './components/about/About.js';
import Location from './components/location/Location';
import Contact from './components/contact/Contact';


import Navigation from './components/navigation/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/location" element={<Location />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
