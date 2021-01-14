import React from 'react';

const SearchPosts = ({ onSearch }) => {



    let searchTerm;

    const handleControlledInputChange = (event) => {
        searchTerm = event.target.value
    }

    const handlSearchButton = (event) => {
        event.preventDefault()
        //console.log("search term: " + searchTerm)
        searchByTerm(searchTerm)
    }

    const searchByTerm = (term) => {
        fetch(`/api/post/search?q=${term}`)
            .then(res => res.json())
            //.then(data => setPosts(data))            
            .then(data => onSearch(data))


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