import { useEffect, useState } from 'react';
import CleaverDisplay from '../CleaverDisplay/CleaverDisplay';

const Cleaver = () => {
    const [cleaverProducts, setcleaverProducts] = useState([]);
        
        useEffect(() => {
            fetch('http://localhost:5000/products/')
                .then(res => res.json())
                .then(data => setcleaverProducts(data))
        }, [])
        console.log(cleaverProducts)
        const cleaverFilters = cleaverProducts.filter(cleaverProduct => cleaverProduct.category== "Fiber Cleaver");
        console.log(cleaverFilters);
    return (
        <div>
            {
                cleaverFilters.map(cleaverFilter => <CleaverDisplay key = {cleaverFilter.id}
                        cleaverFilter ={cleaverFilter}></CleaverDisplay>
                    )
            }
        </div>
    );
};

export default Cleaver;