import { useEffect, useState } from 'react';
import OnuDisplay from '../OnuDisplay/OnuDisplay';

const ONU = () => {
    const [onuProducts, setOnuProducts] = useState([]);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseURL}/products/`)
            .then(res => res.json())
            .then(data => setOnuProducts(data))
            .catch((error) => console.error("Fetch error:", error));
    }, [baseURL])

    const onuFilters = onuProducts.filter(onuProduct => onuProduct.category == "ONU");

    return (
        <div>
            <div>
                {
                    onuFilters.map(onuFilter => <OnuDisplay key={onuFilter._id} onuFilter={onuFilter}></OnuDisplay>

                    )
                }
            </div>

        </div>
    );
};

export default ONU;