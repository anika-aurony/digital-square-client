import React, { useEffect, useState } from 'react';
import SplicerDisplay from '../SplicerDisplay/SplicerDisplay';

const Splice = () => {
    const [splicerProducts, setsplicerProducts] = useState([]);
    // console.log(ponProducts.length)
    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(res => res.json())
            .then(data => setsplicerProducts(data))
    }, [])

    const splicerFilters = splicerProducts.filter(splicerProduct => splicerProduct.category== "Fusion Splicer");
    console.log(splicerFilters);
    return (
        <div>
            {
                splicerFilters.reverse().map(splicerFilter => <SplicerDisplay key = {splicerFilter.id}
                        splicerFilter ={splicerFilter}></SplicerDisplay>
                    )
            }
        </div>
    );
};

export default Splice;