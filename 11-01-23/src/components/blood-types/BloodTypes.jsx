import React from "react";
import { ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

function BloodTypes() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BLOOD_TYPES);

  if (error) return <div>Error...</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div>{data?.type}</div>
      <div>{data?.rh_factor}</div>
      <div>{data?.group}</div>
      <button onClick={refetch}>GET </button>
    </div>
  );
}

export default BloodTypes;
