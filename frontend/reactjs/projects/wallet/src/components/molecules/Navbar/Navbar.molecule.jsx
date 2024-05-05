import React, { useState } from "react";
import "./navbar.style.scss";
import { Input } from "../../atoms";
import user_picture from "../../../assets/user.png";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const searchInputValue = (event) => {
    const value = event.target.value;
    setSearch(value);
    console.log(search);
  };

  return (
    <div className="navbar-container">
      <div className="brand">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/000000/wallet--v1.png"
          alt="wallet--v1"
        />
      </div>
      <div className="search-container">
        <Input
          name="search"
          type="search"
          placeholder="Search"
          inputValue={search}
          onChangeAction={searchInputValue}
        />
      </div>
      <div className="user-container">
        <img
          src={user_picture}
          alt="user_picture"
          className="user_picture"
        ></img>
        <p>Jon Doe</p>
      </div>
    </div>
  );
};

export default Navbar;
