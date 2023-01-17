import React, { useEffect, useState } from "react";

export function mypost(URL) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const PostData = (body) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch(URL, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return setResponse(res);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    PostData();
  }, []);
  return { response, error, PostData };
}
