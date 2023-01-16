import { useEffect, useState } from "react";

export function useFetch(urlToFetch) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setData(null);
    setError(null);
    setLoading(true);

    fetch(urlToFetch)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
        return setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
    refetch: fetchData,
  };
}
