import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import NewPostForm from "./components/PostForm"


function App() {
  return (
    <div className="App">
      <NewPostForm />

      <PostList />
    </div>
  );
}

export default App;