import { useEffect, useState } from 'react';
import OTDRDisplay from '../OTDRDisplay/OTDRDisplay';

const OTDR = () => {
    const [otdrProducts, setOtdrProducts] = useState([]);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseURL}/products/`)
            .then(res => res.json())
            .then(data => setOtdrProducts(data))
            .catch((error) => console.error("Fetch error:", error));
    }, [baseURL])

    const otdrFilters = otdrProducts.filter(otdrProduct => otdrProduct.category == "OTDR");

    return (
        <div className='bg-white'>
            {
                otdrFilters.map(otdrFilter => <OTDRDisplay key={otdrFilter._id} otdrFilter={otdrFilter}></OTDRDisplay>

                )
            }

        </div>
    );
};

export default OTDR;