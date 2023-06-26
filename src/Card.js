import React from 'react'
import data from './mockData.json'
const Card = ({ product }) => {
    return (
        <div className='container col-xl-4  col-lg-3 col-md-2 col-sm-1 mx-auto' style={{ margin: "auto" }}>
            <div className="card mx-auto border border-success p-2 mb-2 border-opacity-5" style={{ width: "auto", height: "28rem" }} >
                <img src={product.image} className="card-img-top mx-auto my-3" style={{ width: "auto", height: "120px" }} alt={product.title} />
                <div className="card-body">
                    <h6 className="card-text overflow-hidden italic" style={{ height: "15%" }}>{product.title} </h6>
                    <p className="card-text overflow-auto " style={{ height: "100px" }}>{product.description}</p>
                    <p className='card-text'><strong>Price:</strong>{product.price}<strong>$</strong></p>
                    <button className="btn btn-primary " onClick={() => { data.push(product) }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
};
export default Card;
