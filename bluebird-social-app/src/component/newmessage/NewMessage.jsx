import React, { useRef, useState } from "react";
import { ENDPOINTS } from "../../fetch/endpoints";
import "./newmessage.css";
import { useFetch } from "../../fetch/my-useFetch";
import { POST } from "../../utils/http";
import { useEffect } from "react";

function NewMessage({ handleModal }) {
  const [messageText, setMessageText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [urlText, setUrlText] = useState("");

  const [msgPost, setMsgPost] = useState(null);

  const messageTextHandler = (e) => setMessageText(e.target.value);
  const authorTextHandler = (e) => setAuthorText(e.target.value);
  const titleTextHandler = (e) => setTitleText(e.target.value);
  const urlTextHandler = (e) => setUrlText(e.target.value);

  const handlePost = (e) => {
    e.preventDefault();
    setMsgPost({
      id: 1,
      userId: 9,
      image: urlText,
      username: authorText,
      title: titleText,
      body: messageText,
    });
  };

  useEffect(() => {
    if (msgPost?.username && msgPost?.body) {
      POST(ENDPOINTS.NEWPOST, msgPost).then((res) => console.log(res));
      if (handleModal) handleModal();
    }
  }, [msgPost]);

  return (
    <form className="new-post" onSubmit={handlePost} method="post">
      <input
        value={messageText}
        type="text"
        placeholder="What's in your thoughts?"
        onChange={messageTextHandler}
        name=""
        id=""
        required
      />
      <input
        value={authorText}
        type="text"
        placeholder="Author..."
        onChange={authorTextHandler}
        name=""
        id=""
        required
      />
      <input
        value={titleText}
        type="text"
        placeholder="Title.."
        onChange={titleTextHandler}
        name=""
        id=""
        required
      />
      <input
        value={urlText}
        type="text"
        placeholder="Url.."
        onChange={urlTextHandler}
        name=""
        id=""
      />

      <input type="submit" value="Send Post" />
    </form>
  );
}

export default NewMessage;
