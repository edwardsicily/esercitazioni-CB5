import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout/Layout";
import App from "./App";
import Users from "./Routes/Users/Users";
import User from "./Routes/Users/User";
import Posts from "./Routes/Posts/Posts";
import Error from "./Error";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import SinglePost from "./Routes/SinglePost/SinglePost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<App />} errorElement={<Error />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userid" element={<User />} />
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:postid" element={<SinglePost />}></Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
