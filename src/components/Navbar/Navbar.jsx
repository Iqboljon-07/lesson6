import React, { useState } from "react";
import { Input, Nav } from "./style";
import Search from "../search/Search";
import Limit from "../limit5/Limit";
import Users from "../users/Users";
import Limit10 from "../limit10/Limit10";

function Navbar({ color, fontSize }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [select, setSelect] = useState("");
  const [show, setShow] = useState(false);

  const [showLimit, setShowLimit] = useState(false);

  const [showLimit10, setShowLimit10] = useState(false);
  console.log(searchTerm);
  const css = {
    color,
    fontSize,
  };
  const style = {
    width: "200px",

    padding: "10px",
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (value === "2") {
      setShowLimit(true);
      document.querySelector(".wrapper").style.display = "none";
      document.querySelector(".wrapper10").style.display = "none";
    }
    if (e.target[2].value) {
      setShowLimit10(true);
      document.querySelector(".wrapper").style.display = "none";
      document.querySelector(".wrapper1").style.display = "none";
    }
  };

  return (
    <>
      <Nav>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search"
          style={css}
        />

        <select
          onChange={handleSelectChange}
          style={style}
          name="options"
          id="options"
        >
          <option value="1"> All</option>
          <option value="2">5</option>
          <option value="3">10</option>
        </select>
      </Nav>
      {searchTerm && <Search props={searchTerm} />}
      {showLimit && <Limit />}
      {showLimit10 && <Limit10 />}
    </>
  );
}

export default Navbar;
