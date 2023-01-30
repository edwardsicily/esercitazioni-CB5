import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import user from "./user.module.scss";

function User() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userid } = useParams();
  const navigate = useNavigate();

  const returnPrevParam = (param) => {
    if (param == 1) return param;
    return parseInt(param) - 1;
  };

  const returnNextParam = (param) => {
    return parseInt(param) + 1;
  };

  const prevParam = returnPrevParam(userid);
  const nextParam = returnNextParam(userid);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users/${userid}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .then(() => setLoading(false));
  }, [userid]);

  const onPrevBtn = () => navigate(`/Users/${prevParam}`);
  const onNextBtn = () => navigate(`/Users/${nextParam}`);
  return (
    <div>
      <Header />

      <div className={user.userWrapper}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <img className={user.image} src={data?.image} alt="" />
            <div className={user.info}>
              <h3
                className={user.name}
              >{`${data?.lastName} ${data?.firstName}`}</h3>
              <h4> {data?.username}</h4>
              <h4>{data?.age}</h4>
            </div>
            <div className={user.btnWrapper}>
              <button disabled={userid == 1 ? true : false} onClick={onPrevBtn}>
                prev
              </button>
              <button onClick={onNextBtn}>next</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default User;
