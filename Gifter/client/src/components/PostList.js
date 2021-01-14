import React, { useEffect, useState } from 'react';
import Post from './Post';
import PostSearch from './PostSearch'
import NewPostForm from "./PostForm"

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/post')
            .then(res => res.json())
            .then(data => setPosts(data))

    }, []);

    return (
        <div className="container">
            <button onClick={() => { console.log(posts) }}>Log</button>
            {/* <NewPostForm onAdd={setPosts} />
            <PostSearch onSearch={setPosts} /> */}
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;