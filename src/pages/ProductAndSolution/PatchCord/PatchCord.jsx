import { useEffect, useState } from "react";
import PatchCordDispaly from "../PatchCordDisplay/PatchCordDispaly";

const PatchCord = () => {
    const [patchcordProducts, setpatchcordProducts] = useState([]);
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        fetch(`${baseURL}/products/`)
            .then(res => res.json())
            .then(data => setpatchcordProducts(data))
            .catch((error) => console.error("Fetch error:", error));
    }, [baseURL])


    const patchcordFilters = patchcordProducts.filter(patchcordProduct => patchcordProduct.category == "Patch Cords");

    return (
        <div className="bg-white">
            {
                patchcordFilters.map(patchcordFilter => <PatchCordDispaly key={patchcordFilter.id}
                    patchcordFilter={patchcordFilter}></PatchCordDispaly>
                )
            }
        </div>
    );
};

export default PatchCord;