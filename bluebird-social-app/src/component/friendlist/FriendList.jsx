import React, { useEffect, useState } from "react";
import { useFetch } from "../../fetch/my-useFetch";
import { ENDPOINTS } from "../../fetch/endpoints";
import Friend from "../friend/Friend";
import { GET } from "../../utils/http";
import "./friendlist.css";

function FriendList({ setModalChildren, setModalState }) {
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    GET(ENDPOINTS.USERS)
      .then(({ users }) => {
        //console.log(users);
        setFriendData(users);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="friend-list">
      {friendData.map((friend) => {
        return (
          <Friend
            key={friend.id}
            data={friend}
            setModalChildren={setModalChildren}
            setModalState={setModalState}
          />
        );
      })}
    </div>
  );
}

export default FriendList;
