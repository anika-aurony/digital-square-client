import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplaySplicer = (props) => {
    const { name, image, image1, price, brand, _id } = props.product;

    // ✅ Change 1: filter out empty images
    const images = [image, image1].filter(Boolean);

    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true); // ✅ Change 2: new fade state

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // start fade out
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFade(true); // fade in new image
            }, 300); // transition timing
        }, 2500); // image switch interval
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <Link to={`/products/${_id}`}>
                <div className="card mb-6">
                    <figure className="md:h-full overflow-hidden">
                        <img
                            className={`w-full h-auto rounded-xl transition-opacity duration-500 ease-in-out ${
                                fade ? 'opacity-100' : 'opacity-0'
                            }`} // ✅ Change 3: dynamic opacity for fade
                            src={images[currentImage]}
                            alt={name}
                        />
                    </figure>
                    <div className="card-body py-4 items-center text-center bg-orange-600 text-white">
                        <h2 className="card-title">{name}</h2>
                        <p>
                            {price}
                            <br />
                            <button className="pt-1 font-semibold text-l">
                                View Details
                            </button>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DisplaySplicer;
