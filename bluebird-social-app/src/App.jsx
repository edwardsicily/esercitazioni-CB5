import { useState } from "react";
import NewMessage from "./component/newmessage/NewMessage";
import PostList from "./component/postlist/PostList";
import FriendList from "./component/friendlist/FriendList";
import FriendDetailed from "./component/friendDetailed/FriendDetailed";
import Search from "./component/search/Search";
import Trend from "./component/trend/Trend";
import Modal from "./component/modal/Modal";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [modalState, setModalState] = useState(false);
  const [modalChildren, setModalChildren] = useState("newmessage");

  const handleModal = () => {
    setModalState((prev) => !prev);
    setModalChildren("newmessage");
    console.log(!modalState);
  };

  /* const handlemodalChildren = (children) => {
    setModalChildren(children);
  }; */

  return (
    <div className="App">
      <div className="lefty-section">
        <div className="friend-section">
          <FriendList
            setModalChildren={setModalChildren}
            setModalState={setModalState}
          />
        </div>
      </div>

      <div className="main-section">
        {modalState && (
          <Modal
            children={
              modalChildren === "newmessage" ? (
                <NewMessage handleModal={handleModal} />
              ) : (
                <FriendDetailed id={modalChildren} />
              )
            }
            handleModal={handleModal}
          />
        )}
        <button className="newpost-btn" onClick={handleModal}>
          NEW POST
        </button>
        <PostList searchValue={searchValue} />
      </div>
      <div className="search-section">
        <Search setSearchValue={setSearchValue} />
        <Trend />
      </div>
    </div>
  );
}

export default App;
