import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";


const NewPostForm = ({ onAdd }) => {
    const history = useHistory();
    const newPost = {}
    const { getToken } = useContext(UserProfileContext);

    // Get SQL friendly DateTime
    Date.prototype.yyyymmdd = function () {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();

        return [this.getFullYear(),
        "-" + (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + "-" + dd
        ].join('');
    };

    var date = new Date();
    date.yyyymmdd();
    // End DateTime Setup

    const submitPost = (post) => {
        getToken()
            .then((token) => {
                fetch('/api/post', {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(post)
                })
                    .then(history.push("/"))
            })
    }

    const handleControlledInputChange = (event) => {
        newPost[event.target.id] = event.target.value
        newPost.userProfileId = parseInt(newPost.userProfileId)
        newPost.dateCreated = date.yyyymmdd();
    }

    const handleClickSavePost = (event) => {
        event.preventDefault()
        submitPost(newPost)
    }

    return (
        <section className="newPostFormArea">
            <h2 className="newPostFormTitle">New Post</h2>
            <form id="newPostForm">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="newTitle">Title:</label><br />
                        <input type="text" id="title" name="newTitle" onChange={handleControlledInputChange} /><br />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="newImageUrl">Image URL:</label><br />
                        <input type="text" id="imageUrl" name="newImageUrl" onChange={handleControlledInputChange} /><br />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="newCaption">Caption: </label><br />
                        <input type="text" id="caption" name="newCaption" onChange={handleControlledInputChange} /><br />
                    </div>
                </fieldset>

                <fieldset>
                    <div className="form-group">
                        <label htmlFor="newUserProfileId">UserProfileId: </label><br />
                        <input type="text" id="userProfileId" name="newUserProfileId" onChange={handleControlledInputChange} /><br />
                    </div>
                </fieldset>

                <button className="btn btn-primary submitPostButton" onClick={handleClickSavePost}> Submit Post </button>
            </form>
        </section>
    )
}

export default NewPostForm;