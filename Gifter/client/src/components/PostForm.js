import React from "react";



const NewPostForm = () => {

    const newPost = {}

    const handleControlledInputChange = (event) => {
        newPost[event.target.id] = event.target.value
        newPost.dateCreated = Date.now();
        //console.log(newPost)
    }

    const handleClickSavePost = (event) => {
        event.preventDefault()

        console.log(newPost)
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