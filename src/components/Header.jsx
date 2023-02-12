import React from "react";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <NavLink to="posts/new">
        <Button text="Создать новый пост" />
      </NavLink>
    </header>
  );
}

export default Header;
