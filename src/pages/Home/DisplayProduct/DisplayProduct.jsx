import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProduct = (props) => {

    const { name, image, price, brand, _id } = props.product;
    return (
        <div>
            <Link to={`/products/${_id}`}>
                <div className="card mb-6" >
                    <figure className="md:h-72">
                        <img src={image} alt="Product" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center bg-orange-600 text-white">
                        <h2 className="card-title">{name}</h2>
                        <p>{price}
                            <br />
                            <button className='pt-1 font-semibold text-l'>View Details</button>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DisplayProduct;