import React, { useEffect, useState } from 'react';
import OTDRDisplay from '../OTDRDisplay/OTDRDisplay';

const OTDR = () => {
    const [otdrProducts, setOtdrProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(res => res.json())
            .then(data => setOtdrProducts(data))
    }, [])

    const otdrFilters = otdrProducts.filter(otdrProduct => otdrProduct.category == "OTDR");

    return (
        <div>
            {
                    otdrFilters.map(otdrFilter => <OTDRDisplay key={otdrFilter._id} otdrFilter={otdrFilter}></OTDRDisplay>

                    )
                }

        </div>
    );
};

export default OTDR;