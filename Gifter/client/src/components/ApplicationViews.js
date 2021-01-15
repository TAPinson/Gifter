import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from './PostDetails'
import UserPosts from './UserPosts'
import Login from './Login'
import Register from './Register'

const ApplicationViews = () => {
    return (
        <Switch>

            <Route path="/" exact>
                <PostList />
            </Route>

            <Route path="/posts/add">
                <PostForm />
            </Route>

            <Route path="/posts/:id">
                <PostDetails />
            </Route>

            <Route path="/userprofile/:id">
                <UserPosts />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>


        </Switch>
    );
};

export default ApplicationViews;