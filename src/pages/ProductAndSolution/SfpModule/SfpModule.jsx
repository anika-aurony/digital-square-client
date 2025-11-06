import { useEffect, useState } from 'react';
import SfpModuleDisplay from '../SfpModuleDisplay/SfpModuleDisplay';

const SfpModule = () => {
    const [sfpProducts, setsfpProducts] = useState([]);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseURL}/products/`)
            .then(res => res.json())
            .then(data => setsfpProducts(data))
            .catch((error) => console.error("Fetch error:", error));
    }, [baseURL])

    const sfpFilters = sfpProducts.filter(sfpProduct => ["SFP", "SFP+", "QSFP", "QSFP+"].includes(sfpProduct.category));

    return (
        <div>

            {
                sfpFilters.map(sfpFilter => <SfpModuleDisplay key={sfpFilter.id}
                    sfpFilter={sfpFilter}></SfpModuleDisplay>
                )
            }
        </div>
    );
};

export default SfpModule;