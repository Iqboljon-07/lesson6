import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import Skeleton from "../skeleton/Skeleton";
function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ofset, setOfset] = useState(1);
  const [dark, setDark] = useState(false);
  const parPageCount = 4;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/users", {
        params: {
          limit: ofset * parPageCount,
        },
      })
      .then((response) => {
        console.log(response);
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [ofset]);

  const Rejim = () => {
    setDark((prev) => !prev);

    document.body.classList.toggle("dark");
  };

  if (ofset * parPageCount > 208) {
    document.querySelector(".btn:first-child").style.display = "none";
  }
  return (
    <>
      <div className="wrapper">
        {users?.map((item) => (
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

      {loading && <Skeleton props={parPageCount} />}

      <div className="btns">
        <button onClick={() => setOfset((prev) => prev + 1)} className="btn">
          See more
          <h3 className="h3" style={{ color: "yellow" }}>
            {ofset && ofset * parPageCount}
          </h3>
        </button>
        <button onClick={Rejim} className="btn">
          <h3> {dark ? "Kun rejimi" : "Tun rejimi"}</h3>
        </button>
      </div>
    </>
  );
}

export default Users;

// onClick={() => setDark((prev) => !prev)}
