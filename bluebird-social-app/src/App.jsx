import { useState } from "react";
import NewMessage from "./component/newmessage/NewMessage";
import PostList from "./component/postlist/PostList";
import FriendList from "./component/friendlist/FriendList";
import Search from "./component/search/Search";
import Trend from "./component/trend/Trend";
import Modal from "./component/modal/Modal";
import { GET } from "./utils/http";
import { ENDPOINTS } from "./fetch/endpoints";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [modalState, setModalState] = useState(false);

  const handleModal = () => {
    setModalState((prev) => !prev);
  };

  return (
    <div className="App">
      <div className="lefty-section">
        <div className="friend-section">
          <FriendList />
        </div>
        <button onClick={handleModal}>OPEN MODAL</button>
      </div>

      <div className="main-section">
        <Modal
          children={<NewMessage />}
          modalState={modalState}
          handleModal={handleModal}
        />
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
