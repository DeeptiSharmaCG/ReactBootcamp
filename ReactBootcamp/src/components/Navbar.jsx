import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className="navbar">
      <h1 className="My Navbar">{props.logo}</h1>

      <div className="nav-links">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>
    </div>
  );
}

export default Navbar

