import React, { useEffect, useState } from "react";
import { filterTag } from "../../utils/utils";
import { ENDPOINTS } from "../../fetch/endpoints";
import { useFetch } from "../../fetch/my-useFetch";
import TrendItem from "./TrendItem";
import "./trend.css";

function Trend() {
  const { data, loading, error } = useFetch(ENDPOINTS.POSTS);
  const [tags, setTags] = useState(null);
  useEffect(() => {
    if (!data) return;

    const tagObj = filterTag(data.posts, "tags");
    console.log(tagObj);
    setTags(tagObj);
  }, [data]);

  return (
    <div className="trends-component">
      <h3>Trends for you</h3>
      <div className="trend-container">
        {!tags
          ? ""
          : tags.map((item, idx) => {
              if (idx < 5) return <TrendItem key={idx} tags={item} />;
            })}
      </div>
    </div>
  );
}

export default Trend;
