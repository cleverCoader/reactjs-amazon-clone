import React from 'react';
import './card-style.css';

const Card= ({heading, imgSrc, description, price}) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img className="card-img-top" src={imgSrc} alt="" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"> {heading} </h4>
                <p className="card-text text-secondary">
                    {description} | {price}
                </p>
                <a href="#" className="btn btn-outline-success">Add To Cart</a>
            </div>
        </div>
       
    );
}

export default Card;
