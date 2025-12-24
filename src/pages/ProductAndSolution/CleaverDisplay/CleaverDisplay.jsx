import React from 'react';
import { Link } from 'react-router-dom';

const CleaverDisplay = (props) => {

    const { name, image, price, brand, description, features, applications, _id } = props.cleaverFilter;
    return (
        <div className='bg-white'>
            <div className="card lg:card-side text-gray-950 shadow-sm border-b-2">
                <div className="md:w-2/3">
                    <figure className="w-full">
                        <img className=""
                            src={image}
                            alt="Album" />
                    </figure>
                </div>

                <div className="card-body w-full">
                    <h2 className="card-title text-2xl md:text-3xl font-semibold">{name}</h2>
                    <p className='text-sm md:text-base leading-relaxed'>{description}</p>
                    <h2 className="text-xl font-semibold pt-2">Features</h2>
                    <ol className='list-disc list-inside space-y-2 md:text-base leading-relaxed' >
                        {
                            features.map(feature => <li >{feature}</li>)
                        }
                        <br />
                    </ol>
                    <div className="card-actions flex justify-between">
                        <Link to={`/products/${_id}`}><button className='btn bg-orange-600 border-orange-600 text-white'>See Details</button></Link>
                        <button className="btn bg-orange-600 border-orange-600 text-white">{price}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CleaverDisplay;