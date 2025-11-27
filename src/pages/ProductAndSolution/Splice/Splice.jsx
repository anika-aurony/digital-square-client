import { useEffect, useState } from 'react';
import SplicerDisplay from '../SplicerDisplay/SplicerDisplay';

const Splice = () => {
    const [splicerProducts, setsplicerProducts] = useState([]);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseURL}/products/`)
            .then(res => res.json())
            .then(data => setsplicerProducts(data))
            .catch((error) => console.error("Fetch error:", error));
    }, [baseURL])


    const splicerFilters = splicerProducts.filter(splicerProduct => splicerProduct.category == "Fusion Splicer");
    if (splicerFilters.length > 1) {
        splicerFilters.unshift(splicerFilters.pop());
    }
    
    return (
        <div>
            {
                splicerFilters.map(splicerFilter => <SplicerDisplay key={splicerFilter.id}
                    splicerFilter={splicerFilter}></SplicerDisplay>
                )
            }
        </div>
    );
};

export default Splice;