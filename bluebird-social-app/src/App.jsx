import { useEffect, useState } from "react";
import NewMessage from "./component/newmessage/NewMessage";
import PostList from "./component/postlist/PostList";
import FriendList from "./component/friendlist/FriendList";
import FriendDetailed from "./component/friendDetailed/FriendDetailed";
import Search from "./component/search/Search";
import Trend from "./component/trend/Trend";
import Modal from "./component/modal/Modal";
import Login from "./component/auth/Login";
import useLog from "./utils/useLog";

import "./App.css";

function App() {
  const [login, setLogin] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [modalState, setModalState] = useState(false);
  const [modalChildren, setModalChildren] = useState("newmessage");
  // useLog(modalState);

  const handleModal = () => {
    setModalState((prev) => !prev);
    setModalChildren("newmessage");
    console.log(!modalState);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  //TODO
  useEffect(() => {
    const authValues = localStorage.getItem("auth");
    setLogin(JSON.parse(authValues));
  }, []);

  /* const handlemodalChildren = (children) => {
    setModalChildren(children);
  }; */

  return login ? (
    <div className="App">
      {}
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
        <div className="main-section-top">
          <button className="newpost-btn" onClick={handleModal}>
            NEW POST
          </button>
          {login && (
            <button className="logout-btn" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </div>

        <PostList searchValue={searchValue} />
      </div>
      <div className="search-section">
        <Search setSearchValue={setSearchValue} />
        <Trend />
      </div>
    </div>
  ) : (
    <>
      <Login />
    </>
  );
}

export default App;
