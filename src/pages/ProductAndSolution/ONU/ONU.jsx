import { useEffect, useState } from 'react';
import OnuDisplay from '../OnuDisplay/OnuDisplay';

const ONU = () => {
    const [onuProducts, setOnuProducts] = useState([]);

    useEffect(() => {
        fetch('http://182.48.80.169:5000/products/')
            .then(res => res.json())
            .then(data => setOnuProducts(data))
    }, [])

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