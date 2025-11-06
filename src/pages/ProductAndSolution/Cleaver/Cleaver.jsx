import { useEffect, useState } from 'react';
import CleaverDisplay from '../CleaverDisplay/CleaverDisplay';

const Cleaver = () => {
    const [cleaverProducts, setcleaverProducts] = useState([]);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseURL}/products/`)
            .then(res => res.json())
            .then(data => setcleaverProducts(data))
            .catch((error) => console.error("Fetch error:", error));
    }, [baseURL])

    const cleaverFilters = cleaverProducts.filter(cleaverProduct => cleaverProduct.category == "Fiber Cleaver");

    return (
        <div>
            {
                cleaverFilters.map(cleaverFilter => <CleaverDisplay key={cleaverFilter.id}
                    cleaverFilter={cleaverFilter}></CleaverDisplay>
                )
            }
        </div>
    );
};

export default Cleaver;