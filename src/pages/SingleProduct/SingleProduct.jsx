import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineLocalPhone } from "react-icons/md";
import axios from 'axios';

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://182.48.80.169:5000/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching product:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (!product) {
        return <div className="text-center py-10 text-red-500">Product not found</div>;
    }


    const { name, image, description, price, features, applications, specImage, types } = product;
    return (
        <div className='mt-20 '>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 px-4 md:px-10 py-6">
                {/* Image Section */}
                <figure className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={image}
                        alt={name}
                        className="rounded-xl w-full md:w-[90%] h-auto object-cover shadow-md"
                    />
                </figure>

                {/* Details Section */}
                <div className="w-full md:w-1/2 text-gray-950 flex justify-center md:justify-start">
                    <div className="text-center md:text-left">
                        <h1 className="pb-4 text-2xl md:text-3xl font-semibold">{name}</h1>

                        <div className="mb-6 text-sm md:text-base leading-relaxed">
                            {description}
                        </div>
                        {/* Patch cord Types */}
                        {
                            types && (<div className='my-6'>
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
                            </div>)
                        }
                        <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center gap-4">
                            <div className="flex items-center gap-2">
                                <MdOutlineLocalPhone className="text-xl text-amber-600" />
                                <p>01332811580</p>
                            </div>
                            <button className="btn btn-outline btn-warning w-full sm:w-auto">
                                {price}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            {features && (
                <div className="px-4 md:px-10 mt-8">
                    <h1 className="text-xl md:text-2xl pb-3 bg-gradient-to-r from-amber-300 to-amber-500 text-center py-2 font-semibold rounded">
                        Features
                    </h1>
                    <div className="flex justify-center mt-4">
                        <ul
                            className={`grid gap-2 text-center ${features.length > 5 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}
                        >
                            {features.map((feature, index) => (
                                <li key={index} className="p-2 border-b border-gray-200">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Applications Section */}
            {applications && (
                <div className="px-4 md:px-10 mt-8 mb-10">
                    <h1 className="text-xl md:text-2xl pb-3 bg-gradient-to-r from-amber-300 to-amber-500 text-center py-2 font-semibold rounded">
                        Applications
                    </h1>
                    <div className="flex justify-center mt-4">
                        <ul
                            className={`grid gap-2 text-center ${applications.length > 5 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}
                        >
                            {applications.map((application, index) => (
                                <li key={index} className="p-2 border-b border-gray-200">
                                    {application}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {specImage && (
                <div className="px-4 mt-8 flex justify-center">
                    <img
                        src={specImage}
                        alt={`${name} Specifications`}
                        className="w-full max-w-4xl h-auto rounded-xl shadow-md object-contain"
                    />
                </div>
            )}

            <Link to="/products/productHome" className="btn btn-outline btn-warning flex mx-6 md:mx-12 my-5">Back to Home</Link>

        </div>
    );
};

export default SingleProduct;