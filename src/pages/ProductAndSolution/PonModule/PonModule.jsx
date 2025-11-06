import { useEffect, useState } from "react";
import PonModuleDisplay from "../PonModuleDisplay/PonModuleDisplay";

const PonModule = () => {
    const [ponProducts, setponProducts] = useState([]);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseURL}/products/`)
            .then(res => res.json())
            .then(data => setponProducts(data))
            .catch((error) => console.error("Fetch error:", error));
    }, [baseURL])
    

    const ponFilters = ponProducts.filter(ponProduct => ponProduct.category == "OLT");

    return (
        <div>
            {
                ponFilters.map(ponFilter => <PonModuleDisplay key={ponFilter.id}
                    ponFilter={ponFilter}></PonModuleDisplay>
                )
            }
        </div>
    );
};

export default PonModule;