import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Users from "../users/Users";
let test = document.querySelector(".wrapper");
function Limit() {
  const [limit, setLimit] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users", {
        params: {
          limit: 5,
        },
      })
      .then((response) => {
        setLimit(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="wrapper1">
        {show == false &&
          limit?.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt="" />
              <h2> {item.firstName + " " + item.lastName}</h2>
              <div className="item_1">
                <h4>Tel </h4>
                <p> {item.phone}</p>
              </div>
              <div className="item_1">
                <h4>Birthday</h4> <p>{item.birthDate} </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Limit;
