
import React from 'react'
import useFetchHook from './useFetchHook'
const url = 'https://fakestoreapi.com/products';
const SearchBox = () => {
    return (
        <div>
            <form className="d-flex" role="search">
                <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBox;
