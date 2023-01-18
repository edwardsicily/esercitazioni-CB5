import React from "react";

function TrendItem({ tags }) {
  return (
    <div className="trend-item">
      <h3>#{tags[0]}</h3>
      <h5>{`${tags[1]} post nell' ultima ora`}</h5>
    </div>
  );
}

export default TrendItem;
