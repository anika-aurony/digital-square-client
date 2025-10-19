import { useEffect, useState } from "react";
import PonModuleDisplay from "../PonModuleDisplay/PonModuleDisplay";

const PonModule = () => {
    const [ponProducts, setponProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/products/')
            .then(res => res.json())
            .then(data => setponProducts(data))
    }, [])

    const ponFilters = ponProducts.filter(ponProduct => ponProduct.category== "OLT");
   
    return (
        <div>
            {
                ponFilters.map(ponFilter => <PonModuleDisplay key = {ponFilter.id}
                        ponFilter ={ponFilter}></PonModuleDisplay>
                    )
            }
        </div>
    );
};

export default PonModule;