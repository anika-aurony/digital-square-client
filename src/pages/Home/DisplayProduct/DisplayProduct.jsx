import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProduct = (props) => {
    
    const { name, image, price, brand, _id } = props.product;
    return (
        <div>
            <Link to={`/products/${_id}`}><div className="card mb-6" >
                <figure className=" h-72">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center bg-orange-600 text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>{price} <br /> <Link to={`/products/${_id}`}><span className='text-blue-400 text-l'><button className='text-white p-2 font-semibold text-l'>View Details</button></span></Link> </p>

                </div>
                
            </div></Link>
        </div>
    );
};

export default DisplayProduct;