import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button/Button";
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

  const onPrevBtn = () => navigate(`/users/${prevParam}`);
  const onNextBtn = () => navigate(`/users/${nextParam}`);
  return (
    <div>
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
              <Button
                content={"prev"}
                disabled={userid == 1 ? true : false}
                action={onPrevBtn}
              />
              <Button content={"next"} action={onNextBtn} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default User;
