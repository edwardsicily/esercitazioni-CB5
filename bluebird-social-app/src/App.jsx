import { useState } from "react";
import NewMessage from "./component/newmessage/NewMessage";
import PostList from "./component/postlist/postList";
import FriendList from "./component/friendlist/FriendList";
import Search from "./component/search/Search";
import Trend from "./component/trend/Trend";
import { GET } from "./utils/http";
import { ENDPOINTS } from "./fetch/endpoints";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  // const [tagData, setTagData] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue) return;
    console.log("Hai cercato: " + searchValue);
  };

  // useState(() => {}, [searchValue]);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="App">
      <div className="friend-section">
        <FriendList />
      </div>
      <div className="main-section">
        {/* <NewMessage /> */}
        <PostList />
      </div>
      <div className="search-section">
        <Search handleSearchValue={(handleSearchValue, handleSearch)} />
        <Trend />
      </div>
    </div>
  );
}

export default App;
