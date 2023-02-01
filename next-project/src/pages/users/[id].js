import React from "react";
import { useRouter } from "next/router";

function user({ user }) {
  return <div>{user && <div>{user.firstName}</div>}</div>;
}

export async function getStaticProps() {
  
  /* const router = useRouter();
  const { id } = router.query; */
  const resUsers = await fetch(`https://dummyjson.com/users`);
  const dataUsers = await resUsers.json();

  return {
    props: {
      user: dataUsers,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export default user;
