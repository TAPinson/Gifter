import React, { useEffect, useState, useContext } from 'react';
import Post from './Post';
import { UserProfileContext } from "../providers/UserProfileProvider";
import PostSearch from './PostSearch'

const PostList = () => {
    const { getToken } = useContext(UserProfileContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getToken().then((token) =>
            fetch('/api/post', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}` // The token gets added to the Authorization header
                }
            })
                .then(resp => resp.json())
                .then(setPosts));
    }, []);

    return (
        <div className="container">
            <PostSearch onSearch={setPosts} />
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