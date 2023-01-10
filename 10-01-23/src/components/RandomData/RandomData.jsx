import React from "react";
import { useEffect, useState } from "react";
import "./randomdata.css";
import { AiOutlineReload } from "react-icons/ai";

const URL = "https://random-data-api.com/api/v2/users";

function RandomData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reload, setReload] = useState(0);
  console.log(reload);
  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [reload]);
  if (error) {
    return (
      <>
        <div>An error occurred</div>
      </>
    );
  }
  if (loading) {
    return (
      <div className="loading">
        <div className="hypnotic-5"></div>
      </div>
    );
  }
  return (
    <div className="user-wrapper">
      <div className="some-info">
        <img src={data.avatar} alt="avatar" className="avatar" />
        <h3 className="fullname">
          {data.first_name} {data.last_name}
        </h3>
        <h4 className="username">@{data.username}</h4>

        <AiOutlineReload
          className="reload-icon"
          onClick={() => setReload((n) => n + 1)}
        />
      </div>
      <div className="data-container">
        <div className="single-data">
          <p>email:</p>
          <p>{data.email}</p>
        </div>
        <div className="single-data">
          <p>gender:</p>
          <p>{data.gender}</p>
        </div>
        <div className="single-data">
          <p>phone:</p>
          <p>{data.phone_number}</p>
        </div>
        <div className="single-data">
          <p>date of birth:</p>
          <p>{data.date_of_birth}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomData;
