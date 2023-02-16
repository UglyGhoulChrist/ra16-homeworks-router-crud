import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Button
        onClick={() => navigate("/posts/new")}
        text="Создать новый пост"
      />
    </header>
  );
}

export default Header;
