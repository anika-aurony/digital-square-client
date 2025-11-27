import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProduct = (props) => {

    const { name, image, price, brand, _id } = props.product;
    return (
        <div>
            <Link to={`/products/${_id}`}>
                <div className="card mb-6 border border-orange-300 border-1 border-b-0 rounded-xl" >
                    <figure className="md:h-full">
                        <img src={image} alt="Product" className="rounded-xl" />
                    </figure>
                    <div className="card-body py-4 items-center text-center rounded-b-xl bg-orange-600 text-white hover:bg-amber-500/90 transition-colors duration-300">
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