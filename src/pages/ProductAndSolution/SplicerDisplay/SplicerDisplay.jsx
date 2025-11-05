import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SplicerDisplay = (props) => {

    const { name, image, image1, price, brand, description, features, applications, specImage, _id } = props.splicerFilter;
    const [currentImage, setCurrentImage] = useState(0);

    const images = [image, image1];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // changes every 3 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm border-b-2">
                <div className="md:w-2/3">
                    <figure className="w-full">
                        <img
                            className="w-full h-auto transition-opacity duration-700"
                            src={images[currentImage]}
                            alt="Banner"
                        />
                    </figure>
                </div>

                <div className="card-body w-full">
                    <h2 className="card-title text-2xl md:text-3xl font-semibold">{name}</h2>
                    <p>{description}</p>
                    <h2 className="text-xl font-semibold pt-2">Features</h2>
                    <ol className='list-disc list-inside space-y-2 md:text-base leading-relaxed' >
                        {features?.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}

                        <br />
                    </ol>
                    <div className="card-actions flex justify-between">
                        <Link to={`/products/${_id}`}><button className='btn bg-orange-600 text-white'>See Details</button></Link>
                        <button className="btn bg-orange-600 text-white">{price}</button>
                    </div>
                </div>
            </div>
            {/* {specImage &&
                <div className="mt-4">
                    <figure className="w-full">
                        <img src={specImage} alt="Specification" className="w-full" />
                    </figure>
                </div> 
            } */}
        </div>
    );
};

export default SplicerDisplay;