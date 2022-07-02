import { Home } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import About from "../About/About";
import Restaurant from "../Restaurant/Restaurant";
import "./Header.css";

const Header = () => {
  let activeStyle = {
    color: "red",
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              className="navlink-style"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink-style"
              to="restaurant"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Restaurant
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink-style" to="about">
              {({ isActive }) => (
                <span style={isActive ? activeStyle : undefined}>About</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
