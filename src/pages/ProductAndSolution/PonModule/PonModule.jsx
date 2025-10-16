import { useEffect, useState } from "react";
import PonModuleDisplay from "../PonModuleDisplay/PonModuleDisplay";

const PonModule = () => {
    const [ponProducts, setponProducts] = useState([]);
    // console.log(ponProducts.length)
    useEffect(() => {
        fetch('../product.json')
            .then(res => res.json())
            .then(data => setponProducts(data))
    }, [])

    const ponFilters = ponProducts.filter(ponProduct => ponProduct.category== "OLT");
    console.log(ponFilters);
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