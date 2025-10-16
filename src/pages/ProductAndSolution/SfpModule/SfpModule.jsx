import  { useEffect, useState } from 'react';
import SfpModuleDisplay from '../SfpModuleDisplay/SfpModuleDisplay';

const SfpModule = () => {
    const [sfpProducts, setsfpProducts] = useState([]);
        // console.log(ponProducts.length)
        useEffect(() => {
            fetch('../product.json')
                .then(res => res.json())
                .then(data => setsfpProducts(data))
        }, [])
    
        const sfpFilters = sfpProducts.filter(sfpProduct =>  ["SFP", "SFP+", "QSFP", "QSFP+"].includes(sfpProduct.category) );
        console.log(sfpFilters);
    return (
        <div>
    
            {
                sfpFilters.map(sfpFilter => <SfpModuleDisplay key = {sfpFilter.id}
                        sfpFilter ={sfpFilter}></SfpModuleDisplay>
                    )
            }
        </div>
    );
};

export default SfpModule;