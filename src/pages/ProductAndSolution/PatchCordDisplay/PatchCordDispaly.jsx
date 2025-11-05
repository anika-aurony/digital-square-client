import React from 'react';
import { Link } from 'react-router-dom';

const PatchCordDispaly = (props) => {
    const { name, image, price, brand, description, features, applications, types, _id } = props.patchcordFilter;
    return (
        <div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-sm border-b-2">
                    <div className="w-2/4">
                        <figure className="w-full">
                            <img className=""
                                src={image}
                                alt="Album" />
                        </figure>
                    </div>

                    <div className="card-body w-full">
                        <h2 className="card-title text-2xl md:text-3xl font-semibold">{name}</h2>
                        <p className='text-sm md:text-base leading-relaxed'>{description}</p>
                        <h2 className="text-lg mt-3 text-center">Types Available</h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Type</th>
                                        <th>Mode</th>
                                        <th>Diameter</th>
                                        <th>Length Range</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        types.map((type, index) => (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td>{type.type}</td>
                                                <td>{type.mode}</td>
                                                <td>{type.diameter}</td>
                                                <td>{type.length_range}</td>
                                            </tr>
                                        ))
                                    }




                                </tbody>
                            </table>
                        </div>
                        <div className="card-actions flex justify-between">
                            <Link to={`/products/${_id}`}><button className='btn bg-orange-600 text-white'>See Details</button></Link>
                            <button className="btn bg-orange-600 text-white">{price}</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PatchCordDispaly;