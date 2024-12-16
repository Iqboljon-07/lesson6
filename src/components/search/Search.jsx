import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Search({ props }) {
  const [data, SetData] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      console.log(response);
      SetData(response.data.users);
    });
  }, []);

  const filterData = data?.filter((user) =>
    // user.firstName.tolowercase().includes(props.tolowercase())
    user.firstName.toLowerCase().includes(props.toLowerCase())
  );
  return (
    <>
      <main className="wrapper">
        {
          (document.querySelector(".wrapper").style.display =
            "none" &&
            filterData?.map((item) => (
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
            )))
        }
      </main>
    </>
  );
}

export default Search;
