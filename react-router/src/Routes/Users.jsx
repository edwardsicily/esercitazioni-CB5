import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import UsersItem from "./UsersItem/UsersItem";
import styles from "./UsersItem/styles.module.scss";

function Users() {
  const [dataList, setDataList] = useState(null);
  const [loading, setLoading] = useState(false);
  useState(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((res) => setDataList(res.users))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <Header />
      <div className={styles.UserWrapper}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          dataList?.map((user, idx) => {
            return <UsersItem key={idx} data={user} />;
          })
        )}
      </div>
    </div>
  );
}

export default Users;
