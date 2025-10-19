import { useEffect, useState } from 'react';

import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const ShowProduct = () => {
    
    const [reorderedProducts, setReorderedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // start loading before fetch
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => {
                const ordered = [
                    data.find(p => p.name.toLowerCase().includes("onu")),
                    data.find(p => p.name.toLowerCase().includes("v9+")),
                    data.find(p => p.name.toLowerCase().includes("83s")),
                    data.find(p => p.name.toLowerCase().includes("v3")),
                    data.find(p => p.name.toLowerCase().includes("a9+")),
                    data.find(p => p.name.toLowerCase().includes("9c+")),
                    data.find(p => p.name.toLowerCase().includes("a8")),
                    data.find(p => p.name.toLowerCase().includes("otdr")),
                    data.find(p => p.name.toLowerCase().includes("epon olt")),
                    data.find(p => p.name.toLowerCase().includes("gpon olt")),
                    data.find(p => p.name.toLowerCase().includes("20km")),
                    data.find(p => p.name.toLowerCase().includes("40km")),
                ].filter(Boolean);

                setReorderedProducts(ordered);
                setLoading(false); // stop loading when done
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                setLoading(false); // stop loading even if error
            });
    }, []);


    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="loading loading-spinner text-primary text-3xl"></span>
            </div>
        );
    }

    // const hotProductFilters = products.filter(hotProduct => hotProduct.hotProduct == "Yes");


    
    
    return (
        <div className='py-10 bg-base-100'>

            <h2 className="text-2xl font-serif uppercase font-bold mb-6 text-center text-orange-500">
                🔥 Hot  Products
            </h2>
            <Marquee pauseOnHover speed={50} gradient={false}>
                {reorderedProducts.map((p) => (
                    <Link
                        key={p._id}
                        to={`/products/${p._id}`}
                        className="card w-60 mx-4 bg-base-100 border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                        <figure className="h-40">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="object-cover w-full h-full rounded-t-xl"
                            />
                        </figure>
                        <div className="card-body text-center">
                            <h3 className="font-semibold">{p.name}</h3>
                            <p className="text-orange-500 font-bold">{p.price}</p>
                        </div>
                    </Link>
                ))}
            </Marquee>
        </div>
    );
};

export default ShowProduct;