import React, { useState } from 'react'
import useFetchHook from './useFetchHook'
import Card from './Card';
const url = 'https://fakestoreapi.com/products';
const AllData = () => {
    const data = useFetchHook(url);
    const [query, setQuery] = useState("");
    return (
        <>
            <div>
                <nav className="navbar bg-body-tertiary container rounded mx-lg-auto my-2 mx-sm-2" style={{ marginTop: "2rem" }}>
                    <div className="container-fluid">
                        <h4 className='' style={{ color: "#970e0e" }}> 𝔈-ℭ𝔬𝔪𝔪𝔢𝔯𝔠𝔢 𝔚𝔢𝔟𝔰𝔦𝔱𝔢</h4>
                        <div className='d-flex'>
                            <form className="d-flex" role="search">
                                <input className="form-control mx-2 border border-danger" type="search" placeholder="Search here" aria-label="Search" onChange={event => setQuery(event.target.value)} />
                            </form>
                            <button className='btn btn-danger'>My Cart</button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container mx-auto '>
                <div style={{ color: "white" }} className='row container'>
                    {data && data.filter((post) => {
                        if (query === '') {
                            return post;
                        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                    }).map((post) => (
                        <Card product={post} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AllData;
