import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./newmessage.css";

function NewMessage() {
  const [body, setBody] = useState("");
  const tweet = useRef(null);

  const handleTweetText = (e) => {
    e.preventDefault();
    if (!tweet.current.value) return;
    console.log(tweet.current.value);
    setBody(tweet.current.value);
  };

  return (
    <form className="new-post" method="post">
      <input
        ref={tweet}
        type="text"
        placeholder="What's in your thoughts?"
        name=""
        id=""
      />
      <input onClick={handleTweetText} type="submit" value="Send Post" />
    </form>
  );
}

export default NewMessage;
