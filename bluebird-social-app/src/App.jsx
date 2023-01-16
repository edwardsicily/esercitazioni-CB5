import "./App.css";
import NewMessage from "./component/newmessage/NewMessage";
import PostList from "./component/postlist/postList";

function App() {
  return (
    <div className="App">
      <NewMessage />
      <PostList />
    </div>
  );
}

export default App;
