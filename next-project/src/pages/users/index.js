import React from "react";
import styles from "@/styles/Pages.module.scss";
import Layout from "@/layout/Layout";

function Users({ users }) {
  return (
    <Layout>
      <div className={styles.Pages}>
        {users &&
          users.map((user) => {
            return (
              <div className={styles.Pages__users}>
                <div>{`${user.firstName} ${user.lastName}`}</div>
                <img src={user.image} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();
  return {
    props: {
      users: dataUsers.users,
    },
  };
}

export default Users;
