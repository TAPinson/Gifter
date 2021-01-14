import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPosts = () => {
    const [posts, setPosts] = useState();
    const { id } = useParams();

    let postersName = "NAME VARIABLE"

    useEffect(() => {
        fetch(`/api/userprofile/${id}`) // <-------- Start here. Only thing dont to this page is copy past, function rename
            .then(res => res.json())
            .then(userProfile => {
                postersName = userProfile.name
                console.log(postersName)
                setPosts(userProfile.posts)
            })
        //.then(userProfile => postersName = userProfile.name)
    }, []);

    if (posts !== undefined) {
        return (
            <div className="container">
                <div className="row justify-content-center">

                    {posts.map((post) => {
                        post.userProfile = {}
                        post.userProfile.name = postersName
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
                Nothing to see here {postersName}
            </div>

        );
    }
};

export default UserPosts;