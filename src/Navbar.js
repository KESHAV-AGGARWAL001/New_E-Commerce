import React, { memo, useState } from 'react'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary container rounded mx-lg-auto my-2 mx-sm-2" style={{ marginTop: "2rem" }}>
                <div className="container-fluid">
                    <h4 className='' style={{ color: "#970e0e" }}> 𝔈-ℭ𝔬𝔪𝔪𝔢𝔯𝔠𝔢 𝔚𝔢𝔟𝔰𝔦𝔱𝔢</h4>
                    <form className="d-flex" role="search">
                        <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default memo(Navbar);
