import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { UserProfileContext } from "../providers/UserProfileProvider";

const UserPosts = () => {
    const [posts, setPosts] = useState();
    const { id } = useParams();
    const { getToken } = useContext(UserProfileContext);

    useEffect(() => {
        getToken()
            .then((token) => {

                fetch(`/api/post/getbyuser/${id}`, {
                    methid: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setPosts(data))
            })
    }, []);

    if (posts !== undefined) {
        return (
            <div className="container">
                <div className="row justify-content-center">

                    {posts.map((post) => {
                        return (<Post key={post.id} post={post} />)
                    })}

                </div>
            </div>
        );
    }

    if (posts == undefined) {
        return (
            <div>
                <button onClick={() => {
                    console.log(posts)
                }}>debug</button>
                Nothing to see here
            </div>

        );
    }
};

export default UserPosts;