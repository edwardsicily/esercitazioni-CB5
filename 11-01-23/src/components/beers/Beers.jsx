import "./beers.css";
import { useFetch } from "../../hooks/use-fetch";
import { ENDPOINTS } from "../../constants/endpoints";

function Beers() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BEERS);

  if (error) return <div>Error...</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div>{data?.brand}</div>
      <div>{data?.name}</div>
      <div>{data?.alcohol}</div>
      <button onClick={refetch}>GET NEW BEER</button>
    </div>
  );
}

export default Beers;
