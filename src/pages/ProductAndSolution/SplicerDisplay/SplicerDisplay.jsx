import React from 'react';

const SplicerDisplay = (props) => {
    
    const { name, image, price, brand, description, features, applications, specImage  } = props.splicerFilter;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm border-b-2">
                <div className="w-2/3">
                    <figure className="w-full">
                        <img className=""
                            src={image}
                            alt="Album" />
                    </figure>
                </div>

                <div className="card-body w-full">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h2 className="text-lg">Features</h2>
                    <ol>
                        {features?.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}

                        <br />
                    </ol>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{price}</button>
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