import { useEffect, useState } from 'react';

import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    // console.log(products.length)
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const hotProductFilters = products.filter(hotProduct => hotProduct.hotProduct == "Yes");
    console.log(hotProductFilters);
    return (
        <div className='py-10 bg-base-100'>

            <h2 className="text-2xl font-serif uppercase font-bold mb-6 text-center text-orange-500">
                🔥 Hot Products
            </h2>
            <Marquee pauseOnHover speed={50} gradient={false}>
                {hotProductFilters.map((p) => (
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