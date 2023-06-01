import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AppPosts from "./components/AppPosts";
import { API } from "./shared/api";
import SinglePost from "./pages/SinglePost";
import AddPost from "./components/AddPost";

API.get("/posts").then(({ data }) => console.log(data));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="posts" element={<AppPosts />}></Route>
      <Route path="posts/:id" element={<SinglePost />}></Route>
      <Route path="/addPost" element={<AddPost />}></Route>
      <Route path="edit/:id" element={<AddPost />}></Route>
    </Routes>
  );
}

export default App;
