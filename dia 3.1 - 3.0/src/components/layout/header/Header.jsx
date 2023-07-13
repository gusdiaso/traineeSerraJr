import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
      <div className="header">
        <h1>Nome Squad</h1>
        <div>
          <nav>
            <Link to="/">Cards Info - 3.0</Link>
            <Link to="/Dia31">Card SerraJr - 3.1</Link>
          </nav>
        </div>
      </div>
    );
  }