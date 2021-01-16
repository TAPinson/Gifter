import React, { useEffect, useState, useContext } from 'react';
import { UserProfileContext } from "../providers/UserProfileProvider";

const SearchPosts = ({ onSearch }) => {
    const { getToken } = useContext(UserProfileContext);

    let searchTerm;

    const handleControlledInputChange = (event) => {
        searchTerm = event.target.value
    }

    const handlSearchButton = (event) => {
        event.preventDefault()
        searchByTerm(searchTerm)
    }

    const searchByTerm = (term) => {
        getToken()
            .then((token => {
                fetch(`/api/post/search?q=${term}`, {
                    headers: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then(res => res.json())
                    .then(data => onSearch(data))
            }))
    }

    return (
        <section className="searchBarArea">
            <form id="searchPostForm">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="newSearch">Search:</label><br />
                        <input type="text" id="search" name="newSearch" onChange={handleControlledInputChange} />
                        <button className="btn btn-primary" onClick={handlSearchButton}> Search </button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}

export default SearchPosts;