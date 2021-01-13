import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import NewPostForm from "./components/PostForm"
import PostSearch from './components/PostSearch'

function App() {
  return (
    <div className="App">
      <NewPostForm />
      <PostSearch />
      <PostList />
    </div>
  );
}

export default App;