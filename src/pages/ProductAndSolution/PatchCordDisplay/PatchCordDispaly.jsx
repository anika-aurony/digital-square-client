import React from 'react';

const PatchCordDispaly = (props) => {
    const { name, image, price, brand, description, features, applications, types } = props.patchcordFilter;
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
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
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
                        {/* <ol>
                            {
                                types.map(type => <li >{type.type} {type.mode}</li>)
                            }
                            <br />
                        </ol> */}
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">{price}</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PatchCordDispaly;