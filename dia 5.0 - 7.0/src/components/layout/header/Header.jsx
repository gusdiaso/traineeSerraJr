import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
      <div className="header">
        <h1>Nome Squad</h1>
        <div>
          <nav>
            <Link to="/">Tarefas</Link>
            <Link to="/receitas">Receitas</Link>
          </nav>
        </div>
      </div>
    );
  }