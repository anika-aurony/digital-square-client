import  { useEffect, useState } from 'react';
import SfpModuleDisplay from '../SfpModuleDisplay/SfpModuleDisplay';

const SfpModule = () => {
    const [sfpProducts, setsfpProducts] = useState([]);
        
        useEffect(() => {
            fetch('http://182.48.80.169:5000/products/')
                .then(res => res.json())
                .then(data => setsfpProducts(data))
        }, [])
    
        const sfpFilters = sfpProducts.filter(sfpProduct =>  ["SFP", "SFP+", "QSFP", "QSFP+"].includes(sfpProduct.category) );
        
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